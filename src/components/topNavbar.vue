<template>
    <div>
        <b-navbar style="background-color: #1f921f" fixed="top" toggleable="lg">
            <b-navbar-brand to="/">
                <img
                    width="25px"
                    src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                    alt="passclass logo"
                />
                PassClass
            </b-navbar-brand>
            <b-navbar-toggle target="navbarCollapse"></b-navbar-toggle>
            <b-collapse id="navbarCollapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="">About</b-nav-item>
                    <b-nav-item to="/calendar">Calendar</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Language">
                        <b-dropdown-item>
                            <img
                                width="25px"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                                alt=""
                            />
                            English
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <img
                                width="25px"
                                src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg"
                                alt=""
                            />
                            French
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-button>Login/Sign-up</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "topNavbar",
    data() {
        return {
            routes: {}
        }
    }
};
</script>