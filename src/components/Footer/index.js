import './style.css';

export default function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <div class="footer-navigation">
                    <h3 class="footer-h3">Footer Navigation</h3>
                    <div>
                        <h4>Home Page</h4>
                        <h4>Our Services</h4>
                        <h4>Meet the Team</h4>
                        <h4>Blog</h4>
                        <h4>Contact Us</h4>
                        <h4>Gallery</h4>
                        <h4>Portfolio</h4>
                        <h4>Online Shop</h4>
                    </div>
                </div>
                <div class="footer-gallery">
                    <h3 class="footer-h3">Latest Gallery</h3>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="footer-twitter">
                    <h3 class="footer-h3">From Twitter</h3>
                    <div>
                        <p>@<span class="orange-text-bold">name</span>RT @<span class="orange-text-bold">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. <span class="orange-text-light">about 9 hours ago</span></p>
                        <p>@<span class="orange-text-bold">name</span> RT @<span class="orange-text-bold">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. <span class="orange-text-light">about 9 hours ago</span></p>
                        <p>@<span class="orange-text-bold">name</span> RT @<span class="orange-text-bold">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. <span class="orange-text-light">about 9 hours ago</span></p>
                        <p>@<span class="orange-text-bold">name</span> RT @<span class="orange-text-bold">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. <span class="orange-text-light">about 9 hours ago</span></p>
                    </div>
                </div>
                <div class="footer-form">
                    <h3 class="footer-h3">From Twitter</h3>
                    <label>
                        Name *
                        <br />
                        <input type="text"/>
                    </label>
                    <label>
                        Email *
                        <br />
                        <input type="text"/>
                    </label>
                    <textarea cols="25" rows="10"></textarea>
                    <div>
                        <button>Submit</button>
                        <button>Reset</button>
                    </div>
                </div>
            </div>
            <div></div>
        </footer>
    );
}