'use strict'

// const events = require('./forecasts/events')

$(() => {
  $('#caseStudyFilter').on('click', onFilterCaseStudies)

})

const onFilterCaseStudies = function (event) {
  event.preventDefault()
  console.log('event is ', event)
  const selectAll = $('#showcase').find('.case-study-box')
  const selectEvens = $('#showcase').find('.case-study-box:odd')
  const selectOdds = $('#showcase').find('.case-study-box:even')

  if (event.target.id === "showAll"){
    console.log('event.target is showAll')
    selectAll.show()
    $('#showAll').addClass('active')
    $('#showEven').removeClass('active')
    $('#showOdd').removeClass('active')
  }
  else if (event.target.id === "showEven"){
    console.log('event.target is showEven')
    selectEvens.show()
    selectOdds.hide()
    $('#showAll').removeClass('active')
    $('#showEven').addClass('active')
    $('#showOdd').removeClass('active')
  }
  else if (event.target.id === "showOdd"){
    console.log('event.target is showOdd')
    selectOdds.show()
    selectEvens.hide()
    $('#showAll').removeClass('active')
    $('#showEven').removeClass('active')
    $('#showOdd').addClass('active')
  }

  // debugger
}
