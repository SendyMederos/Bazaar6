const AWS = require("aws-sdk");

class BlobService {

	#bucket;

	rethrowErrors = false;

	s3;

	constructor(bucket, region, apiVersion) {

		this.#bucket = bucket

		// Set the region
		AWS.config.update({
			region
		});

		// Create S3 Service Object
		this.s3 = new AWS.S3({
			apiVersion
		});

	}

	async delete(fileName) {

		try {

			let response = await this.s3.deleteObject(this.getDeleteObjectParams(fileName)).promise()

		} catch (throwable) {

			console.log(`An error occurred while deleting a blob from the bucket due to: ${throwable}`)

			if (this.rethrowErrors)
				throw throwable

		}

	}

	/**
	 * Returns a collection of S3 elements
	 *
	 * @returns {Promise<null|Array<Object>>}
	 */
	async list() {

		try {

			let response = await this.s3.listObjects({
				Bucket: this.#bucket
			}).promise()

			return response.Contents;

		} catch (throwable) {

			console.log(`An error occurred while listing the bucket due to: ${throwable}`)

			if (this.rethrowErrors)
				throw throwable

		}

		return null

	}

	/**
	 * Uploads a blob to S3
	 *
	 * @param fileName The key of the object in S3
	 * @param data The value of the object in S3
	 * @returns {Promise<boolean>} If true, the object was successfully uploaded to S3
	 */
	async put(fileName, data) {

		try {

			let putObjectParams = this.getPutObjectParams(fileName, data)
			let response = await this.s3.putObject(putObjectParams).promise()
			return response.ETag != null;

		} catch (throwable) {

			console.log(`An error occurred while uploading a blob to the bucket due to: ${throwable}`)

			if (this.rethrowErrors)
				throw throwable

		}

		return false

	}

	getCreateBucketParams() {
		return {
			Bucket: this.#bucket
		}
	}

	getDeleteObjectParams(fileName) {
		return {
			Bucket: this.#bucket,
			Key: fileName,
		}
	}

	getPutObjectParams(fileName, data) {
		return {
			Bucket: this.#bucket,
			Key: fileName,
			Body: data,
		}
	}

}

module.exports = (bucket, region = "us-east-1", apiVersion = "2006-03-01") => {
	return new BlobService(bucket, region, apiVersion)
}
