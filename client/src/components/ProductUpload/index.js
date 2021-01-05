import React from 'react';
import './style.css';
import axios from 'axios';

export function ProductUpload(props) {

function uploadHandler(e) {
  const data = new FormData();
  data.append('file', e.target.files[0]);
  axios.post('/upload', data).then((res) => {
    this.setState({ photos: [res.data, ...this.state.photos] });
});
}

	return (
		<>
			<div className="card">
      <input type="file" name="file" onChange={this.uploadHandler}/>
			</div>
		</>
	);
}