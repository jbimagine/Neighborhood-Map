import React, { Component } from 'react';
import '../App.css';


class Sidemenu extends Component {
  render() {
    const { isMenuVisible } =this.props;

    return (
      <div>
       
          <div id = 'sidemenu-container'style = {isMenuVisible?{left: '0px', transitionDuration: '0.5s'}:{left: '-375px', transitionDuration: '0.5s'}}>
          <div style = {{ width: '100%' }}>
          <form id = 'sidemenu-form' >
            <label style = {{width: '80%', display:'flex'}}>
            
              <input id = 'sidemenu-search-box' type="text" name="name"/>
            </label>
          </form>
          <div id = 'sidemenu-content-container'>  
            <div id = 'sidemenu-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis condimentum metus in iaculis. Vivamus vel leo erat. Morbi finibus sapien non cursus sagittis. Sed posuere, turpis et egestas laoreet, odio nunc vulputate velit, ac vulputate mauris purus vel tortor. Nam non quam ac elit interdum vehicula. Etiam pulvinar nisl eros, ac tincidunt risus ultricies posuere. Cras faucibus, justo sed eleifend condimentum, nulla risus aliquet elit, elementum commodo dolor urna at nibh. Praesent sollicitudin, dolor vitae imperdiet facilisis, tortor nulla fermentum purus, nec gravida quam ligula sit amet dolor. Integer quis eros non urna efficitur imperdiet sed sit amet odio. Mauris nec nisl blandit, convallis risus non, placerat urna. Nulla facilisi. In hac habitasse platea dictumst. Sed auctor quis justo ac venenatis.

Quisque eleifend sit amet ligula in iaculis. Fusce sed pretium risus, non imperdiet ligula. Curabitur odio urna, tempor nec eros id, pretium iaculis felis. In id enim et dui commodo facilisis id sit amet erat. Quisque a tempor lorem, a luctus diam. Aliquam viverra laoreet malesuada. Fusce sapien sapien, tristique at elit eu, semper accumsan quam. Aliquam a augue ut dui imperdiet vehicula ut semper nisi. Vestibulum eget magna vehicula, dapibus erat quis, scelerisque odio. Donec blandit finibus posuere. Suspendisse at commodo velit.

Aliquam eget lectus nisi. Praesent purus eros, sodales quis mi sit amet, egestas posuere lacus. Praesent tincidunt sem eu metus imperdiet aliquet. Quisque tempus posuere accumsan. Donec vel nulla eget quam convallis bibendum. Vivamus imperdiet iaculis pharetra. Maecenas lectus sapien, gravida in finibus a, accumsan sed elit. Sed molestie augue et sapien interdum vulputate. Maecenas dui tortor, cursus vel cursus quis, sollicitudin a ante. Morbi eget feugiat arcu, sed pulvinar sapien. Curabitur imperdiet sapien sed sem pharetra, et mollis erat porta. Nam consectetur enim a orci tincidunt efficitur. Fusce luctus, nibh vel faucibus blandit, libero erat vehicula nunc, elementum pharetra eros leo id odio. Vestibulum dapibus enim ultrices odio ornare elementum. Sed ut risus a erat vehicula pharetra. Etiam volutpat justo gravida, maximus ligula a, vehicula nisl.

Sed eget suscipit nisi. Aliquam mi ante, semper sed eros semper, commodo dignissim lacus. Curabitur eu orci eget urna varius congue non sit amet elit. Vestibulum aliquam iaculis magna, sed tincidunt diam pellentesque tempus. Nullam dui arcu, sagittis vel mi at, efficitur dapibus ex. Quisque tincidunt sem id faucibus imperdiet. Aliquam lobortis ipsum tellus, sit amet consectetur libero ultricies in. Pellentesque dolor risus, dictum a euismod quis, egestas ac neque. Integer tempor, orci vitae feugiat tempor, arcu neque egestas magna, in malesuada elit risus ut quam. Nulla sed auctor turpis, quis ultricies odio.

Maecenas congue, turpis non consectetur mattis, purus quam pretium odio, finibus viverra ante dui eu diam. Nulla facilisi. Vivamus at venenatis ante, sed tincidunt urna. Ut quis maximus ligula, et bibendum libero. Maecenas fermentum purus ut tellus fringilla, quis porta arcu sollicitudin. Sed volutpat efficitur viverra. Nullam vel laoreet lacus. Fusce in erat sapien. Aenean non elementum dolor. Duis gravida nibh vitae ligula vulputate ullamcorper. Nunc at varius metus. Phasellus id mauris ut diam pretium molestie posuere at mi. Curabitur fringilla sagittis nibh, non tincidunt elit. Nunc elit odio, imperdiet ac massa quis, cursus pretium arcu. Proin elit libero, eleifend vitae porta non, ultricies quis orci. Nulla pellentesque, odio ac ultricies luctus, quam nunc venenatis purus, id varius massa ligula non purus.
            </div>
          </div>
          </div>
          </div>
       
      </div>
    );
  }
}

export default Sidemenu;