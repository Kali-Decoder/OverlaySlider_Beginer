const click = document.querySelector(".click");
      const img = document.querySelector("img");
      const title = document.querySelector(".title");
      var i = 0;
      var images = [
        {
          title: "Tools",
          src: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          title: "Scene",
          src: "https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          title: "Fire",
          src: "https://images.pexels.com/photos/426444/pexels-photo-426444.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          title: "Globe",
          src: "https://images.pexels.com/photos/35016/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          title: "Model",
          src: "https://images.pexels.com/photos/573294/pexels-photo-573294.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          title: "Tiny",
          src: "https://images.pexels.com/photos/619419/pexels-photo-619419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
            title:'Camera',
            src:'https://images.pexels.com/photos/861440/pexels-photo-861440.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        {
            title:'Loving Dog',
            src:'https://images.pexels.com/photos/56034/alsatian-black-eyes-german-shepherd-56034.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        {
            title:'Skull',
            src:'https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },
        {
            title:'Cars',
            src:'https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        },

      ];
      setInterval(()=>{
        img.setAttribute("src", `${images[i].src}`);
        img.style.transition='.9s';
        title.innerHTML = `${images[i].title}`;
        if (i == images.length - 1) i = 0;

        i++;
      },2000)
        
      