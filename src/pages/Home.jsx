import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col-reverse md:flex-row items-center max-w-screen-xl mx-auto p-6">
          <div className="text-center md:text-left md:w-1/2 p-6">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">
              Welcome to My Website
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio sequi reiciendis voluptates voluptate libero aliquam obcaecati iste nemo sint? Quam ea, laudantium cum dolores aspernatur maiores expedita distinctio facilis.
              Nostrum soluta iusto sit similique nemo temporibus eius in, itaque, deserunt, nisi nulla deleniti! Ut libero neque quas, distinctio excepturi, at, ipsam eaque reiciendis architecto nemo non enim obcaecati repellat?
              Eius quis animi tenetur natus fuga est officiis modi totam nulla facere atque porro temporibus cum mollitia quo necessitatibus quam, laudantium suscipit! Exercitationem fuga excepturi odio enim obcaecati sint fugiat?
              Corporis, provident consectetur saepe voluptatibus odit iste dignissimos consequuntur eius libero, nulla itaque enim quas debitis dicta iure soluta a adipisci, similique dolore? Sit ab architecto ducimus dolore non eveniet!
              Dolor quod modi, ratione nihil ex molestias cum, blanditiis error optio eius distinctio itaque autem magnam pariatur totam cumque quis. Obcaecati, aperiam deserunt sequi eveniet ex ullam nulla pariatur eligendi?
              Amet at a vitae facere laudantium. Dicta incidunt sed sint, possimus ullam similique reiciendis architecto eveniet odio eius magni nam consectetur optio cupiditate totam quidem! Consectetur nobis ad incidunt quas!
              Sed nihil possimus similique veniam fugiat, ducimus, dolorem unde natus tempore nam blanditiis accusamus voluptas quasi ipsum aperiam! Corporis neque quod harum! Vitae omnis voluptate dolor sit autem accusamus! Tenetur?
            </p>
            <Link
              to="/about"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="md:w-1/2 h-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1739924144825-4544ec14ee29?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
              className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
