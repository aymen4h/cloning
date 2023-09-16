import { useContext, useState } from "react";
import styles from "./Prof.module.css";



export default function Prof() {
    function handleImageChange() {
        const files = e.target.files || null;
        if (files) {
          const fileList = Array.from(files);
          setFile(fileList);
        }
      };


    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.heading}>
                    <h3>Profile Details</h3>

                    <p>Add your details to create a personal touch to your profile.</p>
                </div>

                <div className={styles.profile_pic}>
                    <label htmlFor="image">
                        <span>Profile Picture</span>

                        <div className={styles.img_container}>

                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleImageChange}
                            />
                            <div
                                className={styles.img_upload}
                            >
                                <div>           <img src={imageSrc} alt="Selected" style={{ maxWidth: '100%' }} />
                                </div>
                                <span>&#43; Upload Image</span>
                            </div>
                        </div>

                        <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
                    </label>
                </div>

                <div className={styles.profile_details}>
                    <label htmlFor="first-name">
                        <span>First name*</span>

                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="e.g. John"

                            required
                        />
                    </label>

                    <label htmlFor="last-name">
                        <span>Last name*</span>

                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="e.g. Appleseed"

                            required
                        />
                    </label>

                    <label htmlFor="email">
                        <span>Email</span>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="e.g. email@example.com"

                            required
                        />
                    </label>
                </div>
            </section>
            <div className={styles.hhr}>
                <hr />
            </div>
            <div className={styles.save_btn_container}>

            </div>

        </div>
    );
}