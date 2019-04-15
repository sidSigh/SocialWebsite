import React, { Component } from "react";
class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      // detailsPreview:''
    };
    // this._handleTextChange=this._handleTextChange.bind(this)
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }
// _handleTextChange(e){
//     e.preventDefault();

//     let reader = new TextReader();
//     let file = e.target.text[0];

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        // detailsPreview:reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() { let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    //   let {DetailsPreview} = this.state;
    // let $detailsPreview = null;
    // if (detailsPreview) {
    //   $DetailsPreview = {detailsPreview} ;
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
         
                </form>
        <div className="ProfileImg">
        {$imagePreview}
               </div>
      </div>
    )
  }

}
  // <button type="submit" onClick={this._handleSubmit}>Upload Event</button>


export default ImagePreview;