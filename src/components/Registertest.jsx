import React from 'react'

export default function Register() {
    const registerUser = (e) => {
        e.preventDefault()
        const user = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value,

        }
        fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={registerUser}>
                <label>First Name: <input type="text" name="first_name" /></label><br />
                <label>LastName: <input type="text" name="last_name" /></label><br />
                <label>Email: <input type="email" name="email" /></label><br />
                <label>Password: <input type="password" name="password" /></label><br />
                <input type="file" name='profile_image' /><br />
                <button>Register</button>


            </form>
        </div>
            {/* 
            <section class="bg-white">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">

                    <main
                        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <h1 class="flex items-center justify-center text-l font-bold text-black-900">Wellcome to our register page</h1>

                            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="FirstName" class="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="LastName" class="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                                    />
                                </div> */}

    {/*  <div class="col-span-6 sm:col-span-3">
                                    <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
                                    />
                                </div> */}

    {/*   <div class="col-span-6">
                                  /*   <label for="MarketingAccept" class="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        class="size-5 rounded-md border-gray-200 bg-white shadow-xs"
                    />

                    <span class="text-sm text-gray-700">
                        I want to receive emails about events, product updates and company announcements.
                    </span>
                </label> */
        /*  </div>  */
    }

    {/*  <div class="col-span-6"> */ }
    {/*  <p class="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <a href="#" class="text-gray-700 underline"> terms and conditions </a>
                                        and
                                        <a href="#" class="text-gray-700 underline">privacy policy</a>.
                                    </p> */}
    {/*  </div>

                                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                                    >
                                        Create an account
                                    </button> */}

    {/* <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <a href="#" class="text-gray-700 underline">Log in</a>.
                                    </p> */}
    {/*   </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    )
}
 */}