import React, { Component } from 'react';
import Cropper from './pages/Cropper.page';
import DefaultFooter from './components/Footer/DefaultFooter.component';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './components/Cropper/Cropper.constants';
const defaultProps = {
    footerComponent: <DefaultFooter doneText='DONE' rotateText='ROTATE' cancelText='CANCEL'/>,
    onDone: (_croppedImageUri) => { },
    onError: (_err) => { },
    onCancel: () => { },
    imageUri: '',
    imageWidth: 1280,
    imageHeight: 747,
    TOP_VALUE: 0,
    LEFT_VALUE: 0,
    BOTTOM_VALUE: 0,
    RIGHT_VALUE: 0,
    initialRotation: 0,
    NOT_SELECTED_AREA_OPACITY: 0.5,
    BORDER_WIDTH: 50,
    COMPONENT_WIDTH: SCREEN_WIDTH,
    COMPONENT_HEIGHT: SCREEN_HEIGHT,
};
class App extends Component {
    render() {
        return (<Cropper footerComponent={this.props.footerComponent} onDone={this.props.onDone} onError={this.props.onError} onCancel={this.props.onCancel} imageUri={this.props.imageUri} imageWidth={this.props.imageWidth} imageHeight={this.props.imageHeight} TOP_VALUE={this.props.TOP_VALUE} LEFT_VALUE={this.props.LEFT_VALUE} BOTTOM_VALUE={this.props.BOTTOM_VALUE} RIGHT_VALUE={this.props.RIGHT_VALUE} initialRotation={this.props.initialRotation} NOT_SELECTED_AREA_OPACITY={this.props.NOT_SELECTED_AREA_OPACITY} BORDER_WIDTH={this.props.BORDER_WIDTH} COMPONENT_WIDTH={this.props.COMPONENT_WIDTH} COMPONENT_HEIGHT={this.props.COMPONENT_HEIGHT}/>);
    }
}
App.defaultProps = defaultProps;
export default App;
