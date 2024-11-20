import { CheckIcon, ReceiptRefundIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import Badge from "./Badge";

const StatusEventBadge = ({ status }) => {
    return (
        <div>
            {status == 1 ? (
                <Badge color="green">
                    Activo
                    <CheckIcon className="ml-1 h-4 w-4" />
                </Badge>
            ) :
                (
                    <Badge>
                        Inactivo
                        <XCircleIcon className="ml-1 h-4 w-4" />
                    </Badge>
                )}

        </div>
    );
};

export default StatusEventBadge;
