
export const movePath = function(nowPath, targetPath){
    const checkUrl = nowPath.split("/");
    let url = '';
    checkUrl.splice(0, 1);
    if( checkUrl.length > 1 ) checkUrl.splice(checkUrl.length-1, 1);

    for (const s of checkUrl) {
        url += `/${s}`;
    }
    url += targetPath;


    return url;
}

export default{
    movePath: movePath,
}