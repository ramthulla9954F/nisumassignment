import HttpCalls from "./ApiCall";

export const headersData = async () => {
    return {
        headers: {
            "Content-Type": "application/json",
        },
    };
};

export const _getTableData = async () => {
    let { _do_call } = HttpCalls;
    let headers = await headersData();
    return _do_call("GET",`data?drilldowns=Nation&measures=Population`,headers);
};
