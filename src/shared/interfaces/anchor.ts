import React, {ReactNode} from "react";

export interface IAnchor extends React.HTMLAttributes<Element> {
   destinationUrl: string
   onClick?: () => void;
   target?: string;
   children?: ReactNode
}