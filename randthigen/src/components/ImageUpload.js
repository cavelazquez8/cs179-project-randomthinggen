import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
function ImageUpload(props) {
	const fileUpload = (e) => {
		console.log(e.target.files);

		var formData = new FormData();
		formData.append('file', e.target.files[0]);
		axios.post('/api/post/image/upload', formData).then((res) => {
			console.log('filePath: ', res.data.filePath.originalname);
			props.setImage(res.data.filePath.originalname);
		});
	};
	return (
		<div>
			<Form.Control
				type='file'
				accept='image/*'
				onChange={(e) => {
					fileUpload(e);
				}}
			/>
		</div>
	);
}

export default ImageUpload;
