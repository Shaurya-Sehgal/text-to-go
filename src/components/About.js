import React from "react";

function About(props) {
  return (
    <>
      <div className={`bg-${props.theme}`}>
        <div className="container py-5">
          <h1 className={`text-center text-${props.textTheme}`}>About Us</h1>
          <div className="row">
            <div className="col bg-secondary bg-gradient bg-opacity-25 shadow rounded p-3 mt-2">
              <p className={`text-${props.textTheme}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                maiores corporis illo numquam quisquam hic quod ipsam natus
                explicabo, iste exercitationem, esse itaque nam laudantium rerum
                perferendis eaque. Illo nemo ullam tempora labore deserunt
                doloremque sit tenetur. Eligendi qui aspernatur hic natus error
                quod quam doloribus ipsam tempora ad. Voluptas ad temporibus sed
                id deleniti molestias praesentium magni vitae nisi aperiam
                aliquam nobis voluptates illum eligendi nihil ipsa repellat
                reiciendis natus vel sapiente, quaerat voluptatum est voluptate.
                Beatae mollitia omnis inventore, voluptas ut quaerat? Expedita
                alias quisquam ipsam, eos odio pariatur cupiditate aliquid
                dolores eveniet quaerat iste commodi corporis voluptas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
