var area=[],title=[];
function select_option(data)
{
    var subjects=JSON.parse(data);
    var select=document.getElementById("area");
    for(index in subjects)
        select.options[select.options.length]=new Option(subjects[index].area, subjects[index].area);
}
function claims()
{
    let texttitle=document.getElementById("title").value,textarea=document.getElementById("area").value,element;
    if(texttitle&&textarea!='Alege materia')
    {
        console.log(texttitle);
        area.push(textarea);
        title.push(texttitle);
        element="";
        for(i=0;i<area.length;++i)
            element+='<h4>'+area[i]+'</h4>'+'\n'+"<h5 style='color: #92E3A9;'>("+title[i]+')</h5>'+"<br>",console.log("da");
        document.getElementById("reports").innerHTML=element;
    }
    else
        alert("Date nevalide: ("+texttitle+","+textarea+")!");
}