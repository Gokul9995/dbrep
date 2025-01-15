function JSONTOEXEL()
{
const url="https://github.com/Gokul9995/dbrep/blob/main/Kovilcollection2025.json";

  const json = JSON.stringify(response); 
  // console.log(json)

  const d=JSON.parse(json);

  // console.log(d)
  const result= d.map(ppl =>{
    return [ppl["name"],ppl["address"],ppl["amount"]]
  })
  return result

  // var data = json;
  //  var pathArray = xpath.split(".");
  //   for (var i = 0; i < pathArray.length; i++) { data = data[pathArray[i]]; } 
    // return data; 
  }
