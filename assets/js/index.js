'use strict'

$(() => {
  $('#caseStudyFilter').on('click', onFilterCaseStudies)

})

const onFilterCaseStudies = function (event) {
  event.preventDefault()
  console.log('event is ', event)
  const selectAll = $('#showcase').find('.case-study-filter')
  const selectEvens = $('#showcase').find('.case-study-filter:odd')
  const selectOdds = $('#showcase').find('.case-study-filter:even')

  if (event.target.id === "showAll"){
    selectAll.show()
    $('#showAll').addClass('active')
    $('#showEven').removeClass('active')
    $('#showOdd').removeClass('active')
  }
  else if (event.target.id === "showEven"){
    selectEvens.show()
    selectOdds.hide()
    $('#showAll').removeClass('active')
    $('#showEven').addClass('active')
    $('#showOdd').removeClass('active')
  }
  else if (event.target.id === "showOdd"){
    selectOdds.show()
    selectEvens.hide()
    $('#showAll').removeClass('active')
    $('#showEven').removeClass('active')
    $('#showOdd').addClass('active')
  }

}
