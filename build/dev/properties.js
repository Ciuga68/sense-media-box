/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// MediaBox Type
	// ****************************************************************************************
	var mbTypeItem = {
		type: "string",
		ref: "props.mbType",
		component: "radiobuttons",
		label: "MediaBox type",
		options: [
			{
				value: "html",
				label: "HTML"
			},
			{
				value: "image",
				label: "Image"
			},
			{
				value: "video",
				label: "Video"
			},
			{
				value: "website",
				label: "Web site"
			}
		],
		defaultValue: "html"
	};

	var mbTypeHeader = {
		type: "items",
		label: "MediaBox type",
		items: {
			mbType: mbTypeItem
		}

	};

	// ****************************************************************************************
	// Image Header
	// ****************************************************************************************
	var imagePropsHeader = {
		type: "items",
		label: "Image",
		items: {
			imageSource: {
				type: "string",
				ref: "props.image.source",
				label: "Image source (Url)",
				expression: "optional"
			},
			imageHorizontalAlign: {
				type: "string",
				ref: "props.image.horizontalAlign",
				component: "buttongroup",
				label: "Horizontal align",
				options: [
					{
						value: "left",
						label: "Left"
					},
					{
						value: "center",
						label: "Center"
					},
					{
						value: "right",
						label: "Right"
					}
				],
				defaultValue: "left"
			}
		},
		show: function ( data ) {
			return data.props.mbType === 'image';
		}
	};

	// ****************************************************************************************
	// Html Header
	// ****************************************************************************************
	var htmlPropsHeader = {
		type: "items",
		label: "Html",
		items: {
			htmlSource: {
				type: "string",
				ref: "props.html.source",
				expression: "optional"
				,
				defaultValue: '<div style="font-weight:bold;color: darkgreen;">This is the MediaBox</div>'
			}

		},
		show: function ( data ) {
			return data.props.mbType === 'html'
		}
	};

	// ****************************************************************************************
	// Video
	// ****************************************************************************************

	var videoPropsHeader = {
		type: "items",
		label: "Video",
		items: {
			videoType: {
				type: "string",
				ref: "props.video.videoType",
				//component: "dropdown",
				label: "Video type",
				//options: [
				//	{
				//		value: "video-mp4",
				//		label: "MP4"
				//	}
				//	//,
				//	//{
				//	//	value: "vimeo",
				//	//	label: "Vimeo"
				//	//}
				//],
				defaultValue: "video/mp4",
				show: function ( data ) {
					return false;
				}

			},
			videoPoster: {
				type: "string",
				ref: "props.video.poster",
				label: "Video poster image (Url)"
			},
			videoSourceMP4: {
				type: "string",
				ref: "props.video.sourceMP4",
				label: "Video source (Url)",
				expression: "optional",
				show: function ( data ) {
					return true;
					//console.log( 'data', data );
					//return data.props.video && data.props.video.videoType && data.props.video.videoType === 'video/mp4';
				}
			}
			//,
			//videoSourceVimeo: {
			//	type: "string",
			//	ref: "props.video.sourceVimeo",
			//	label: "Vimeo Id",
			//	expression: "optional",
			//	show: function ( data ) {
			//		return data.props.video && data.props.video.videoType && data.props.video.videoType === 'vimeo';
			//	}
			//}
		},
		show: function ( data ) {
			return data.props.mbType === 'video';
		}
	};

	// ****************************************************************************************
	// Website Header
	// ****************************************************************************************

	var websitePropsHeader = {
		type: "items",
		label: "Web site",
		items: {
			settings: {
				type: "items",
				label: "Source",
				items: {
					websiteSource: {
						ref: "props.website.source",
						label: "Web site (Url):",
						type: "string",
						expression: "optional",
						defaultValue: ""
					},
					websiteScrollbars: {
						ref: "props.website.scrollBehavior",
						label: "Scrollbars",
						type: "string",
						component: "dropdown",
						options: [
							{
								value: "auto",
								label: "Auto"
							},
							{
								value: "on",
								label: "Always on"
							},
							{
								value: "none",
								label: "Always hidden"
							}
						],
						defaultValue: "none"
					},
					websiteNoInteraction: {
						ref: "props.website.interaction",
						label: "Interaction",
						type: "boolean",
						component: "switch",
						options: [
							{
								value: true,
								label: "On"
							},
							{
								value: false,
								label: "Off"
							}
						],
						defaultValue: false
					}
				}
			}
		},
		show: function ( data ) {
			return data.props.mbType === 'website';
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearanceSection = {
		uses: "settings"
		//,
		//items: {
		//	mbSettings: {
		//		type: "items",
		//		label: "MediaBox definition",
		//		items: {
		//			ddType: mbTypeItem,
		//			imageProps: imageProps,
		//			videoProps: videoProps,
		//			websiteProps: websiteProps,
		//			htmlProps: htmlProps
		//		}
		//	}
		//}
	};

	var mediaBoxSection = {
		type: "items",
		component: "expandable-items",
		label: "MediaBox",
		items: {

			mbType: mbTypeHeader,
			image: imagePropsHeader,
			html: htmlPropsHeader,
			website: websitePropsHeader,
			video: videoPropsHeader

		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearanceSection,
			mediaBoxSection: mediaBoxSection
		}
	};

} );
