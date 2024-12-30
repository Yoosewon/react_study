"use client";

import style from './signup.module.css';
import BackButton from "./BackButton";

export default function SignupModal() {
    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:9090/api/users', {
            method: 'post',
            body: JSON.stringify({
                id,
                nickname,
                image,
                password,
            }),
            credentials: 'include',
        }).then((response: Response) => {
            console.log(response.status);
            if (response.status === 200) {
                router.replace('/home');
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>계정을 생성하세요.</div>
                    </div>
                    <form>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="id">아이디</label>
                                <input id="id" name="id" className={style.input} type="text" placeholder=""

                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">닉네임</label>
                                <input id="name" name="name" className={style.input} type="text" placeholder=""
                                       required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                                <input id="password" name="password" className={style.input} type="password" placeholder=""
                                       required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">프로필</label>
                                <input id="image" name="image" required className={style.input} type="file" accept="image/*"
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button type="submit" className={style.actionButton} >가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}