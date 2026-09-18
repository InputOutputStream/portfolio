const Button = ({text, className, id}) => {
  return (
    <a 
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter')

        if(target && id)
        {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({top, behavior: 'smooth'}); 
        }
      }}

      className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          {/*
            .arrow-wrapper img already has `transition-transform duration-500`
            in index.css but nothing was triggering a transform change on
            hover — the icon just sat static. group-hover:translate-y-1 uses
            the existing transition to give the button a subtle "press down"
            affordance on hover, consistent with bg-circle's existing
            group-hover animation on the same element.
          */}
          <img
            src={`${import.meta.env.BASE_URL}images/arrow-down.svg`}
            alt="arrow"
            className="group-hover:translate-y-1"
          />
        </div>
      </div>
    </a>
  )
}

export default Button
