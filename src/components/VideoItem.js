import React from "react"
import "./VideoItem.css"

const VideoItem = props => {
	const { onVideoSelect, video } = props
	const { title, thumbnails } = props.video.snippet
	return (
		<div
			onClick={() => {
				onVideoSelect(video)
			}}
			className="video-item item"
		>
			<img alt={title} className="ui image" src={thumbnails.medium.url} />
			<div className="content">
				<div className="header">{title}</div>
			</div>
		</div>
	)
}

export default VideoItem
