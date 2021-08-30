/**
 * This file was generated from MultifieldSearchSave.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type SearchMethodParamEnum = "startswith" | "contains";

export interface SearchAttributesType {
    searchAttributeParam?: EditableValue<string | Big>;
    searchMethodParam: SearchMethodParamEnum;
    customSearchEntity?: ListValue;
    customSearchAttribute?: ListAttributeValue<string | Big>;
    customSearchPath: string;
}

export interface SearchAttributesPreviewType {
    searchAttributeParam: string;
    searchMethodParam: SearchMethodParamEnum;
    customSearchEntity: {} | { type: string } | null;
    customSearchAttribute: string;
    customSearchPath: string;
}

export interface MultifieldSearchSaveContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    targetGridName: string;
    targetGridClass: string;
    renderAsTextarea: boolean;
    ta_rows: number;
    filterLabel: string;
    gridEntity: ListValue;
    minCharacters: string;
    searchAttributes: SearchAttributesType[];
    expertQuery: string;
    allowOrConditions: boolean;
    useRegEx: boolean;
    splitString: string;
    searchSaveEntity?: ListValue;
    searchSaveAttribute?: ListAttributeValue<string | Big | Date>;
}

export interface MultifieldSearchSavePreviewProps {
    class: string;
    style: string;
    sampleText: string;
    targetGridName: string;
    targetGridClass: string;
    renderAsTextarea: boolean;
    ta_rows: number | null;
    filterLabel: string;
    gridEntity: {} | { type: string } | null;
    minCharacters: string;
    searchAttributes: SearchAttributesPreviewType[];
    expertQuery: string;
    allowOrConditions: boolean;
    useRegEx: boolean;
    splitString: string;
    searchSaveEntity: {} | { type: string } | null;
    searchSaveAttribute: string;
}
