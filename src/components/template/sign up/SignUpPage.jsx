"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

const SignUpPage = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
        rePassword: "",
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

        const { email, password, rePassword } = form;

        if (!email.trim()) return toast.error("ایمیل خود راواردکنید")
        if (!password.trim() || password.length < 5) return toast.error("پسورد معطبر وارد کنید")
        if (password !== rePassword) return toast.error("پسورد ها یکسان نیستند")

        setIsLoad(true)

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        setIsLoad(false)

        if (res.status <= 200) {
            toast.success("کاربر با موفقیت ساخته شد")
            setTimeout(() => router.replace("/signin"), 1400)

        } else if (data.error) {
            toast.error(data.error)

        } else {
            toast.promise("صبور باشید")
        }
        console.log(data)
    }

    return (
        <div
            style={{
                animation: "bounceIn .5s"
            }}
            className="
            p-4
            m-4
            rounded-xl
            shadow-lg
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
                  "> ثبت نام </h1>

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

                <label htmlFor="rePassword"> تکرار پسورد </label>
                <input
                    type="rePassword"
                    value={form.rePassword}
                    onChange={changeHandler}
                    name="rePassword"
                    id="rePassword"
                />
                {
                    isLoad ?
                        (<div className="flex justify-center pr-6" >
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
                        text-lg
                 "
                        > ثبت نام </button>)}
            </form>

            <div
                className="
            py-2
            [&>a]:text-blue-600
            " >
                حساب کاربری داری؟
                <Link href="/signin" > ورود </Link>
            </div>

            <Toaster />
        </div>
    );
};

export default SignUpPage;