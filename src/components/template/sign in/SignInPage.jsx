"use client"

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { InfinitySpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const SignUpPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isLoad, setIsLoad] = useState(false);
    const router = useRouter();

    const changeHandler = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const signUpHandler = async (e) => {
        e.preventDefault();

        const { email, password } = form;

        if (!email.trim()) return toast.error("ایمیل خود راواردکنید")
        if (!password.trim() || password.length < 5) return toast.error("پسورد معطبر وارد کنید")

        setIsLoad(true)

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        setIsLoad(false)

        if (res.status <= 200) {
            toast.success("با موفقیت وارد شدید")
            setTimeout(() => router.replace("/"), 1400)

        } else if (res.error) {
            toast.error(res.error)

        } else {
            toast.promise("صبور باشید")
        }
    }

    return (
        <div
            style={{
                animation: "bounceIn .5s"
            }}
            className="
            p-4
            rounded-xl
            shadow-lg
            m-4
            border-blue-400
            border-2
            md:w-3/6
            md:m-auto
        " >
            <form
                onSubmit={signUpHandler}
                className="
                flex
                flex-col
                [&>input]:py-2
                [&>input]:border
                [&>input]:border-blue-400
                [&>input]:rounded-md
                [&>input]:p-1
                [&>input]:outline-blue-500
                [&>input]:placeholder:text-blue-900
                [&>label]:mt-4
                [&>label]:text-blue-900
                [&>label]:text-lg
             "
            >
                <h1
                    className="
                        text-center
                        text-2xl
                        text-blue-600
                  "> ورود </h1>

                <label htmlFor="email"> ایمیل </label>
                <input
                    type="email"
                    value={form.email}
                    onChange={changeHandler}
                    name="email"
                    id="email"
                />
                <label htmlFor="password">پسورد</label>
                <input
                    value={form.password}
                    type="password"
                    onChange={changeHandler}
                    name="password"
                    id="password"
                />

                {
                    isLoad ?
                        (<div className="flex justify-center " >
                            <InfinitySpin
                                width='100'
                                color="#4fa9ff"
                            />
                        </div>) :

                        (<button
                            onClick={signUpHandler}
                            className="
                        rounded-md
                        text-white
                        bg-blue-600
                        hover:bg-blue-500
                        mt-4
                 "
                        > ورود </button>)}
            </form>

            <div
                className="
            py-2
            [&>a]:text-blue-600
            " >
                حساب کاربری نداری؟
                <Link href="/signup" > ثبت نام </Link>
            </div>

            <Toaster />
        </div>
    );
};

export default SignUpPage;