import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { MultifieldSearchSavePreviewProps } from "../typings/MultifieldSearchSaveProps";

declare function require(name: string): string;

export class preview extends Component<MultifieldSearchSavePreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/MultifieldSearchSave.css");
}
