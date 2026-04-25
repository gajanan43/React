import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

  // async function onSubmit(data) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
  //   console.log(data);
  //   reset(); // Reset form after submission
  // }


  const onSubmit = (data) => {

    const existingData = JSON.parse(localStorage.getItem("users")) || [];

    const updatedData = [...existingData, data];

    localStorage.setItem("users", JSON.stringify(updatedData));

    reset();

    navigate("/table"); // go to next page

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 container text-center">
        
        {/* First Name */}
        <div >
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets allowed",
              },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <br />

        {/* Last Name */}
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabets allowed",
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <br />

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <br />

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <br />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Form;