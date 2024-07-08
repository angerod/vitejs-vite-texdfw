var url =
  'http://visordocs.sic.gov.co/documentos/Docs044/docsRad132/21/21405541/21405541--0002400001.MP4';

  var url =
  'http://visordocs.sic.gov.co/documentos/Docs044/docsRad132/21/21405541/21405541--0002400001.MP4?862';

var nombreArchivo1 = url.substring(url.lastIndexOf('/') + 1);

console.log('result nombre 1:  ' + nombreArchivo1);

function obtenerNombreArchivo(url) {
  var index = url.indexOf('?');
  if (index !== -1) {
    return url.substring(0, index);
  }
  return url;
}

function changeURL(archivo){
  if(archivo.includes('.EML')){
    var win = window.open(archivo, '_blank');
    win.focus();
  }else{
    if(archivo.includes('.MP4')){

      console.log("en funcion chageURL archivo: "+archivo);

      var nombreArchivo1 = archivo.substring(archivo.lastIndexOf('/') + 1);
      var nombreArchivo = obtenerNombreArchivo(nombreArchivo1);
      
      var urlArchivo = obtenerNombreArchivo(archivo);
      
      var win = window.open(archivo, '_blank');
      win.document.write('<html><body><a href="' + urlArchivo + '" download="' + nombreArchivo + '">Descargar video</a></body></html>');
      win.document.close();
      win.focus();
    }
    else{
    document.getElementById('reproductor').src = archivo;
    }
  }
}

var nombreArchivo = obtenerNombreArchivo(nombreArchivo1);

var url2 = obtenerNombreArchivo(url);

console.log(nombreArchivo);

console.log('url2: ' + url2);
