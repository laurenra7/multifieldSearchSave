import { Component, ReactNode, createElement } from "react";

import { MultifieldSearchSaveContainerProps } from "../typings/MultifieldSearchSaveProps";
import { InspectWidget } from "./components/InspectWidget";

import "./ui/MultifieldSearchSave.css";

export default class MultifieldSearchSave extends Component<MultifieldSearchSaveContainerProps> {
    render(): ReactNode {
        // return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
        const value = this.props.textAttribute.value || "";
        return <InspectWidget
            value={value}
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
        />;
    }
}
