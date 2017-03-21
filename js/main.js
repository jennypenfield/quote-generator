var forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?'

var currentQuote = ''
var currentAuthor = ''

$(document).ready(function () {
  $.getJSON(forismaticAPI, getQuote, 'jsonp')
})

var getQuote = function (data) {
  $('#quote').text(data.quoteText)
  currentQuote = data.quoteText

  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown'
  }
  $('#author').text('~ ' + data.quoteAuthor)
  currentAuthor = data.quoteAuthor

  $('#tweet-quote').on('click', function () {
    window.open('https://twitter.com/intent/tweet?text=' + '"' + currentQuote + '  -' + currentAuthor)
  })
}

$('#get-quote').on('click', function () {
  $.getJSON(forismaticAPI, getQuote, 'jsonp')
})
