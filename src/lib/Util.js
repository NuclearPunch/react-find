
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
    mainSpecialty : [       
        {id: 0, title: "상업공간", imgSrc: "/img/concierge/Retail.png",  subTitle: "Retail", selected:false},
        {id: 1, title: "주거공간", imgSrc: "/img/concierge/Residence.png", subTitle: "Residence", selected:false},
        {id: 2, title: "사무공간", imgSrc: "/img/concierge/Office.png",  subTitle: "Office", selected:false},
        {id: 3, title: "부분시공", imgSrc: "/img/concierge/Remdeling.png", subTitle: "Remdeling", selected:false},
    ],
}