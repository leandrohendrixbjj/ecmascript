var url_string = window.location.href;
var url = new URL(url_string);
var cnpj = url.searchParams.get("cnpj"); //pega o value