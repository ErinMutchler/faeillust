<template>
    <footer class="container-footer">
        <div class="container-footerContent">
            <div>
                <FooterSocialMediaIcon :src="TwitterIcon" alt="twitter" url="https://www.twitter.com/faeillust" />
                <FooterSocialMediaIcon :src="InprntIcon" alt="inprnt" url="https://www.inprnt.com/profile/faeillust/" />
                <FooterSocialMediaIcon :src="InstagramIcon" alt="instagram" url="https://www.instagram.com/faeillust/" />
            </div>
            <br />
            <span> &copy; Fae Bedwell 2021 </span>
        </div>

    </footer>
</template>

<style scoped>
    .container-footer {
        text-align: center;
        padding: 1rem 0;
    }

    .container-footerContent {
        display: inline-block;
        background-color: #ffffff77;
        padding: 1rem 4rem;
        border-radius: 40px;
    }
</style>

<script>
  import FooterSocialMediaIcon from "./FooterSocialMediaIcon";
  import TwitterIcon from "../assets/icons/twitter.svg";
  import InprntIcon from "../assets/icons/inprnt.svg";
  import InstagramIcon from "../assets/icons/instagram.svg";

  export default {
    name: "TheFooter",
    components: {
      FooterSocialMediaIcon
    },
    data() {
      return {
        TwitterIcon: TwitterIcon,
        InprntIcon: InprntIcon,
        InstagramIcon: InstagramIcon,
      }
    }
  }
</script>