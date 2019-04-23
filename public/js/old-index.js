$(function(){
  jQuery('.footer').html('Taboo 4 real');
  const footer = $('.footer');
  footer.hide();
  footer.html(5849).toggle();
  let val = $('textarea').attr('class');
  console.log(val);
  const p = $('p');
  p.before('<h4>before</h4>').after('<h1>after</h1>').prepend('<strong>I love strong</strong> ').append(' <a href="/" target="_blank">My xhat app</a>')
  val = p.html();
  console.log('p', val);
  $('title').append(' | Abu Adnaan');
  const span = $('<span></span>').text('this is a span')
  //$('.code-sample').after(span);
  p.click(function(){
    $(this).css('background', 'red').next().hide();
  });
  $('buttonh')
  .click(function(){
    $(this).css({'fontSize': '40px', padding: '  10px', borderRadius: '50%', outline: 'none'});
  })
  .mouseenter(function(){
    $(this).css('background', 'green');
  })
  .mouseleave(function(){
    $(this).css('background', 'red');
  })
  .dblclick(function(){
    $(this).css({fontSize: '10px', borderRadius: '0px'});
    console.log('dblclick');
  });
  
  $('[typeh]').hover(function(){
    $(this).css({fontSize: '40px'});
  },
  function(){
    $(this).css('font-size', '10px');
  }
  );
  $('buttonh').click(function(){
    $('p').fadeOut(1000, function(){
      $(this).fadeIn(2000);
    });
  });
  $('buttong').click(function(){
    $('p').fadeTo(2000, 0.2, function(){
      $(this).fadeTo(1000, 1);
    });
  });
  $('buttong').click(function(){
    $('[type="button"]')
    .css('position', 'relative')
    .animate({
      width: '+=250px',
      fontSize: "40px"
    }, 3000)
    .animate({
      left: '100px',
      top: '200px',
      'width': '-=200px',
      height: 'toggle'
    })
  });
  $('buttong').click(function(){
    $('p')
    .css({background: 'skyblue', height: '300px' })
    .slideUp(4000)
    .slideDown(function(){
      $(this).css({background: 'blue'});
    })
    
  })
  .css({position: 'fixed'});
  
  //const sum = (a, b=a, c=5) => a + b + c;
  //console.log(sum(5,3,2), sum(4), sum(3,4)); //NaN,13,12
  const map = new Map([['name', 'Abu Adnaan'], ['age', 31]]);
  map.set(10, 'number 10');
  map.delete(10)
  console.log(map.size, map.get('age'), map.has(10));
  
  let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
    }
    };
    console.log([...myIterableObj]);
  $('*').css('box-sizing', 'border-box');
  var innerElem = $('<div class="innerElem"><table><tr><td>high</td><td>medium</td><td>low</td></tr></table></div>');
  innerElem.addClass('inner').find('td').css('border', 'white 1px solid').css({'height':'300px', width: '70px'}).eq(0).css({
    verticalAlign: 'top'
  });
  innerElem.find('td').eq(1).css({
    verticalAlign: 'middle'
  });
  innerElem.find('td').eq(2).css({
    verticalAlign: 'bottom'
  });
  innerElem.css({
    height: '300px',
    width: '70%',
    background: 'black',
    
  });
  var outerElem = $('<div></div>');
  outerElem.append(innerElem);
  outerElem.css({
    height: '200px',
    width: '100%',
    background: 'aqua',
    overflow: 'scroll',
  });
  var btn = $('<button class="addContent">Add More</button>');
  $('body').prepend(outerElem, btn);
  var counter=0;
  $('.addContent').click(function(){
    $('.inner').append('<div style="height: 20px">content here '+ ++counter +'</div>');
  });
  console.log('outerElem', outerElem);
});