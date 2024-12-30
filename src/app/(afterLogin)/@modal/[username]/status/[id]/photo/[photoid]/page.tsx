import PhotoModalColseButton from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoid]/_component/PhotoModalCloseButton';
import Post from '@/app/(afterLogin)/_component/Post';
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import style from './photoModal.module.css';
import { faker } from "@faker-js/faker";


export default function PageModal() {
    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text(),
        }
    }

    return (
        <div className={style.container}>
            <PhotoModalColseButton />
            <div className={style.imageZone} >
                <img src={photo.link} alt={photo.Post?.content} />
                <div className={style.image} style={{backgroundImage: `url(${photo.link})`}}></div>
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        <ActionButtons />
                    </div>
                </div>
            </div>
            <div className={style.commentZone}>
                <Post />
                <CommentForm />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}