import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { MultifieldSearchSaveContainerProps } from "../typings/MultifieldSearchSaveProps";

import "./ui/MultifieldSearchSave.css";

export default class MultifieldSearchSave extends Component<MultifieldSearchSaveContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
