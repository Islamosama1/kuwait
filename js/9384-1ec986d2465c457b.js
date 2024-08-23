!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "95fd552f-b3ca-4dda-82e9-01ccb65c06d2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-95fd552f-b3ca-4dda-82e9-01ccb65c06d2"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9384],
  {
    96626: function (e, t) {
      var o, n;
      ((n = o || (o = {})).BANNER = "banner"),
        (n.CLASSIC = "classic"),
        (n.PORTRAIT = "portrait"),
        (t.Z = o);
    },
    70427: function (e, t, o) {
      var n, i, r, a;
      o.d(t, {
        DM: function () {
          return i;
        },
        PP: function () {
          return c;
        },
        WX: function () {
          return s;
        },
        Ze: function () {
          return u;
        },
        a$: function () {
          return l;
        },
        rg: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).COMPACT = "compact"),
        (r.FULL = "full"),
        (r.RESPONSIVE = "responsive"),
        ((a = i || (i = {})).SMALL = "small"),
        (a.MEDIUM = "medium"),
        (a.BIG = "big");
      let s = [
          { label: "Small", value: "small" },
          { label: "Medium", value: "medium" },
          { label: "Large", value: "big" },
        ],
        l = {
          POPPINS: "Poppins",
          MONTSERRAT: "Montserrat",
          INTER: "Inter",
          PLAYFAIR_DISPLAY: "Playfair Display",
          MERRIWEATHER: "Merriweather",
          LIBRE_BASKERVILLE: "Libre Baskerville",
          PERMANENT_MARKER: "Permanent Marker",
          AUDIOWIDE: "Audiowide",
          FREDOKA_ONE: "Fredoka One",
          SPACE_MONO: "Space Mono",
          GLORIA_HALLELUJAH: "Gloria Hallelujah",
          LA_BELLE_AURORE: "La Belle Aurore",
        },
        c = [
          { name: l.POPPINS, font_family: "Poppins, sans-serif" },
          { name: l.MONTSERRAT, font_family: "Montserrat, sans-serif" },
          { name: l.INTER, font_family: "Inter, sans-serif" },
          {
            name: l.PLAYFAIR_DISPLAY,
            font_family: "Playfair Display, sans-serif",
          },
          { name: l.MERRIWEATHER, font_family: "Merriweather, serif" },
          {
            name: l.LIBRE_BASKERVILLE,
            font_family: "Libre Baskerville, sans-serif",
          },
          {
            name: l.PERMANENT_MARKER,
            font_family: "Permanent Marker, sans-serif",
          },
          { name: l.AUDIOWIDE, font_family: "Audiowide, sans-serif" },
          { name: l.FREDOKA_ONE, font_family: "Fredoka One, sans-serif" },
          { name: l.SPACE_MONO, font_family: "Space Mono, sans-serif" },
          {
            name: l.GLORIA_HALLELUJAH,
            font_family: "Gloria Hallelujah, sans-serif",
          },
          {
            name: l.LA_BELLE_AURORE,
            font_family: "La Belle Aurore, sans-serif",
          },
        ],
        u = "social-icons";
    },
    81759: function (e, t, o) {
      o.d(t, {
        Kw: function () {
          return d;
        },
        N9: function () {
          return s;
        },
        S9: function () {
          return r;
        },
        Uj: function () {
          return m;
        },
        XX: function () {
          return f;
        },
        fW: function () {
          return l;
        },
        hm: function () {
          return p;
        },
        i7: function () {
          return u;
        },
        jy: function () {
          return c;
        },
        p_: function () {
          return i;
        },
        sO: function () {
          return a;
        },
      });
      var n = o(43536);
      o(84027);
      let i = { SMALL: "small", LARGE: "large" },
        r = { LEFT: "left", CENTER: "center", RIGHT: "right" },
        a = { LEFT: "left", RIGHT: "right", ALTERNATING: "alternating" },
        s = {
          ONE_ONE: "1:1",
          THREE_TWO: "3:2",
          SIXTEEN_NINE: "16:9",
          THREE_ONE: "3:1",
          TWO_THREE: "2:3",
        },
        l = [
          {
            label: "1:1 Square",
            value: s.ONE_ONE,
            Icon: (0, n.jsx)("div", {
              className:
                "aspect-square w-5 border border-solid border-gray-900",
            }),
          },
          {
            label: "3:2 Horizontal",
            value: s.THREE_TWO,
            Icon: (0, n.jsx)("div", {
              className: "aspect-[3/2] w-5 border border-solid border-gray-900",
            }),
          },
          {
            label: "16:9 Horizontal",
            value: s.SIXTEEN_NINE,
            Icon: (0, n.jsx)("div", {
              className: "aspect-video w-5 border border-solid border-gray-900",
            }),
          },
          {
            label: "3:1 Horizontal",
            value: s.THREE_ONE,
            Icon: (0, n.jsx)("div", {
              className: "aspect-[3/1] w-5 border border-solid border-gray-900",
            }),
          },
          {
            label: "2:3 Vertical",
            value: s.TWO_THREE,
            Icon: (0, n.jsx)("div", {
              className: "aspect-[2/3] w-5 border border-solid border-gray-900",
            }),
          },
        ],
        c = {
          [s.ONE_ONE]: {
            label: "1:1 Square",
            Icon: (0, n.jsx)("div", {
              className:
                "aspect-square w-5 border border-solid border-gray-900",
            }),
          },
          [s.THREE_TWO]: {
            label: "3:2 Horizontal",
            Icon: (0, n.jsx)("div", {
              className: "aspect-[3/2] w-5 border border-solid border-gray-900",
            }),
          },
          [s.SIXTEEN_NINE]: {
            label: "16:9 Horizontal",
            Icon: (0, n.jsx)("div", {
              className: "aspect-video w-5 border border-solid border-gray-900",
            }),
          },
          [s.THREE_ONE]: {
            label: "3:1 Horizontal",
            Icon: (0, n.jsx)("div", {
              className: "aspect-[3/1] w-5 border border-solid border-gray-900",
            }),
          },
          [s.TWO_THREE]: {
            label: "2:3 Vertical",
            Icon: (0, n.jsx)("div", {
              className: "aspect-[2/3] w-5 border border-solid border-gray-900",
            }),
          },
        },
        u = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4 },
        d = { NONE: "none", TOP: "top", CENTER: "center", BOTTOM: "bottom" },
        p = {
          [d.NONE]: "No text",
          [d.TOP]: "Top",
          [d.CENTER]: "Center",
          [d.BOTTOM]: "Bottom",
        },
        f = {
          SMALL: "small",
          MEDIUM: "medium",
          LARGE: "large",
          XLARGE: "xLarge",
        },
        m = { LIGHT: "light", DARK: "dark", NONE: "none" };
    },
    85384: function (e, t, o) {
      o.d(t, {
        n: function () {
          return r;
        },
        v: function () {
          return i;
        },
      });
      var n = o(65170);
      let i = {
          archive: ["zip", "rar"],
          audio: ["wav", "mp3", "ogg", "flac", "wma", "aac", "mid"],
          image: [
            "apng",
            "bmp",
            "gif",
            "ico",
            "cur",
            "jpg",
            "jpeg",
            "jfif",
            "pjpeg",
            "pjp",
            "png",
            "svg",
            "tif",
            "tiff",
            "webp",
            "xbm",
          ],
          pdf: ["pdf"],
          presentation: ["ppt", "pptx", "pps", "key", "odp"],
          spreadsheet: ["csv", "xls", "xlsx", "ods", "ots"],
          text: [
            "doc",
            "docx",
            "docm",
            "dot",
            "dotm",
            "dotx",
            "odt",
            "md",
            "ott",
            "rtf",
            "txt",
          ],
          video: [
            "avi",
            "mp4",
            "mov",
            "wmv",
            "webm",
            "m4v",
            "ogm",
            "mpg",
            "ogv",
            "asx",
            "mpeg",
          ],
        },
        r = {
          archive: `${n.Zt}/file_icons/archive.svg`,
          audio: `${n.Zt}/file_icons/audio.svg`,
          image: `${n.Zt}/file_icons/image.svg`,
          pdf: `${n.Zt}/file_icons/pdf.svg`,
          presentation: `${n.Zt}/file_icons/presentation.svg`,
          spreadsheet: `${n.Zt}/file_icons/spreadsheet.svg`,
          text: `${n.Zt}/file_icons/text.svg`,
          video: `${n.Zt}/file_icons/video.svg`,
          unknown: `${n.Zt}/file_icons/unknown.svg`,
        };
    },
    22252: function (e, t, o) {
      o.d(t, {
        $W: function () {
          return d;
        },
        AX: function () {
          return v;
        },
        Aq: function () {
          return g;
        },
        B7: function () {
          return u;
        },
        C4: function () {
          return D;
        },
        Cb: function () {
          return _;
        },
        F1: function () {
          return h;
        },
        HEADER_GLOBALS: function () {
          return I;
        },
        Hk: function () {
          return E;
        },
        I1: function () {
          return Z;
        },
        Ku: function () {
          return M;
        },
        ML: function () {
          return N;
        },
        Mo: function () {
          return T;
        },
        RZ: function () {
          return f;
        },
        VB: function () {
          return c;
        },
        Vj: function () {
          return H;
        },
        Z2: function () {
          return C;
        },
        ZA: function () {
          return y;
        },
        _E: function () {
          return s;
        },
        bc: function () {
          return L;
        },
        c$: function () {
          return x;
        },
        gb: function () {
          return S;
        },
        iR: function () {
          return P;
        },
        ib: function () {
          return w;
        },
        jz: function () {
          return A;
        },
        lr: function () {
          return U;
        },
        mS: function () {
          return k;
        },
        nZ: function () {
          return j;
        },
        tm: function () {
          return B;
        },
        up: function () {
          return p;
        },
        v$: function () {
          return R;
        },
        vW: function () {
          return O;
        },
        w6: function () {
          return l;
        },
        wg: function () {
          return m;
        },
        xj: function () {
          return b;
        },
      });
      var n = o(70427),
        i = o(96626),
        r = o(81759),
        a = o(65170);
      let s = "pages",
        l = "CreatorAccount",
        c = {
          id: "",
          bid: 0,
          currency: "usd",
          creator_username: "",
          email: "",
          instructions: "",
          media_instructions: "",
          media_url: "",
          name: "",
          status: "created",
          time_created: 0,
          make_private: !1,
          firebase_uid: "",
        },
        u = [
          { platform: "email", value: "" },
          { platform: "facebook", value: "" },
          { platform: "instagram", value: "" },
          { platform: "twitter", value: "" },
          { platform: "youtube", value: "" },
          { platform: "tiktok", value: "" },
        ],
        d = {
          BOOKING: "booking",
          COMMUNITY: "community",
          EMAIL: "email",
          FRIENDS: "friends",
          HEADER: "header",
          IMAGES: "images",
          INSTAGRAM_FEED: "instagram_feed",
          INTEGRATIONS: "integrations",
          LINKS: "links",
          MARKETPLACE: "marketplace",
          MUSIC: "music",
          REQUEST_FEED: "requestfeed",
          REQUESTS: "requests",
          SHOPPABLECONTENT: "shoppablecontent",
          SOCIAL: "social",
          SPACER: "spacer",
          STORE: "store",
          SUPPORT: "support",
          TEXT: "text",
          TOURS_AND_EVENTS: "tours_and_events",
          VIDEOS: "videos",
          FOLLOWERS: "followers",
          MEDIA_KIT_IN_LIB: "media_kit_in_lib",
        },
        p = "hide_beacons_logo",
        f = {
          CLASSIC: "classic",
          CAROUSEL: "carousel",
          IMAGE_GRID: "imageGrid",
          CARD: "card",
          CLASSIC_LARGE: "classicLarge",
          IMAGE_AND_TEXT_RIGHT: "leftImageRightText",
          IMAGE_AND_TEXT_LEFT: "rightImageLeftText",
          IMAGE_CARD: "imageCard",
          LEFT_RIGHT_IMAGE_TEXT: "leftRightImageText",
          MULTI_COLUMN_IMAGE: "twoColumnImage",
          ONE_COLUMN_IMAGE: "oneColumnImage",
        },
        m = { COLUMN: "column", CAROUSEL: "carousel" },
        _ = "autopilot",
        b = {
          COLUMN: "column",
          CAROUSEL: "carousel",
          COLLAPSIBLE: "collapsible",
          EXPOSED: "exposed",
        },
        h = {
          BIG_STACK_CARD: "bigStackCard",
          SMALL_STACK_CARD: "smallStackCard",
          ONE_COLUMN_IMAGE: "oneColumnImage",
          CAROUSEL: "carousel",
          IMAGE_AND_TEXT_RIGHT: "leftImageRightText",
          IMAGE_AND_TEXT_LEFT: "rightImageLeftText",
          ALTERNATING_IMAGE_TEXT: "alternatingImageText",
          STORY_CARD: "storyCard",
          GRID: "grid",
        },
        g = { COLLAPSED: "collapsed", EXPOSED: "exposed" },
        E = { COLLAPSED: "collapsed", EXPOSED: "exposed" },
        L = { COLLAPSED: "collapsed", EXPOSED: "exposed" },
        k = {
          NAME: "name",
          EMAIL: "email",
          PHONE_NUMBER: "phone_number",
          LOCATION: "location",
          BIRTHDATE: "birthdate",
          CUSTOM: "custom",
        },
        A = { LINK: "link", CARD: "card" },
        T = { COLLAPSED: "collapsed", EXPOSED: "exposed" },
        y = "Sign up to get exclusive email updates directly from me.",
        S = "Subscribe",
        w = {
          [d.BOOKING]: {
            buttonTitle: "Set up appointments",
            displayName: "Appointments",
            description:
              "Accept calender bookings and have your fans pay you for your time.",
            shortDescription: "Make money from calendar bookings",
            defaultBlock: {
              cover_image: "",
              session_title: "",
              session_description: "",
              button_title: "Book a 1:1 call",
              session_length: "30 minutes",
              price: 10,
              booking_method: "email",
              calendly_event_uri: "",
            },
            icon: `${a.Zt}/block_icons/booking-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6443825-appointments-block",
          },
          [d.COMMUNITY]: {
            displayName: "Community",
            description: "Show off and engage your fans.",
            shortDescription: "Engage with your fans",
            defaultBlock: {
              community_title: "My community",
              short_description: "",
              note_placeholder: "",
              show_leaderboard: !0,
              show_new_comments_by_default: !0,
            },
            icon: `${a.Zt}/block_icons/community-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6571326-community-block",
          },
          [d.EMAIL]: {
            displayName: "Email & SMS",
            description:
              "Collect an email or SMS list. Supports Mailchimp and Zapier.",
            shortDescription: "Collect emails and phone numbers",
            defaultBlock: {
              placeholder_text: "",
              submit_text: "",
              description: "",
              thumbnail_image_url: "",
              success_message: "",
              redirect_page_id: null,
              form_order: [
                k.NAME,
                k.EMAIL,
                k.PHONE_NUMBER,
                k.LOCATION,
                k.BIRTHDATE,
                k.CUSTOM,
              ],
              form_style: "card",
              collapse_style: "exposed",
              is_notifications_enabled: !1,
              join_community_prompt_enabled: !1,
              show_name_fields: "first_name",
              show_name_field: !1,
              show_first_name_field: !0,
              show_last_name_field: !1,
              name_field_text: "Full name",
              show_location_fields: "",
              show_address_line_1_field: !1,
              show_address_line_2_field: !1,
              show_city_field: !1,
              show_region_field: !1,
              show_postal_code_field: !1,
              show_country_field: !1,
              show_birthdate_field: !1,
              show_custom_field: !1,
              custom_field_text: "",
              email_destination: "beacons",
              zapier_webhook_url: "",
              substack_url: "",
              mailchimp: null,
              information_type: null,
              show_email_field: !0,
              show_phone_number_field: !1,
              legal_enabled: !1,
              legal_text: "",
              legal_url: "",
            },
            icon: `${a.Zt}/navigation_icons/email_marketing_light_rounded.webp`,
            helpLink: "https://help.beacons.ai/en/articles/6810039-email-sms",
          },
          [d.FRIENDS]: {
            displayName: "Friends",
            description: "Link to your friends on Beacons.",
            shortDescription:
              "Link to your friends' Beacons and social accounts",
            defaultBlock: {
              friends_list: [],
              friends_title: "My friends",
              friends_subtitle: "",
              short_description: "",
            },
            icon: `${a.Zt}/block_icons/friends-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6555997-friends-block",
          },
          [d.HEADER]: {
            displayName: "Header",
            description: "Set your profile picture and social links.",
            shortDescription: "Add your profile photo and social channels",
            defaultBlock: {
              header_size: n.DM.BIG,
              header_type: n.rg.FULL,
              social_array: null,
              nickname: "",
              header_banner_image: "",
              header_bio: "",
              header_layout: i.Z.CLASSIC,
              header_location: "",
              header_profile_picture_border: "none",
              header_profile_picture_border_radius: 100,
              header_profile_picture_width_compact: 65,
              header_profile_picture_width_full: 130,
              open_socials_in_new_tab: !1,
              social_icon_size: n.DM.BIG,
              header_color: "#ffffff",
              header_profile_picture_color1: "#ffffff",
              header_logo_url: "",
            },
            icon: `${a.Zt}/block_icons/header-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6428994-header-block",
          },
          [d.IMAGES]: {
            displayName: "Images",
            description: "Embed images.",
            shortDescription: "Add images",
            defaultBlock: {
              aspect_ratio: "",
              collapse_style: E.EXPOSED,
              description: "",
              full_width: !1,
              headline: "",
              image_scale_percent: 100,
              layout: m.COLUMN,
              thumbnail: "",
              images: [],
            },
            icon: `${a.Zt}/block_icons/images-block.png`,
            helpLink: "https://help.beacons.ai/en/articles/6443848-image-block",
          },
          [d.INSTAGRAM_FEED]: {
            displayName: "Instagram Feed",
            description:
              "Link your Instagram feed to boost traffic and promote your products.",
            shortDescription: "Showcase your recent posts",
            defaultBlock: { full_width: !1, posts: [] },
            icon: `${a.Zt}/block_icons/instagram.png`,
          },
          [d.INTEGRATIONS]: {
            displayName: "Integrations",
            description: "Integrate other tools into your Beacons page.",
            shortDescription: "Embed external content",
            defaultBlock: { integration_type: "", integration_url: "" },
            icon: `${a.Zt}/emojis/gear.png`,
          },
          [d.LINKS]: {
            displayName: "Links",
            description: "Link to your favorite other places on the internet.",
            shortDescription: "Add a link or group of links",
            defaultBlock: {
              links: [],
              block_size: r.p_.SMALL,
              box_shadow: !1,
              carousel_image_aspect_ratio: r.N9.ONE_ONE,
              carousel_text_alignment: r.S9.LEFT,
              collapse_style: g.EXPOSED,
              description: "",
              filter_overlay: r.Uj.NONE,
              headline: "",
              image_placement: r.sO.LEFT,
              link_outline: !1,
              link_type: f.CLASSIC,
              multi_column_image_link_num_columns: r.i7.ONE,
              onboarding_completed: !1,
              one_column_image_aspect_ratio: r.N9.THREE_TWO,
              show_text: !0,
              text_alignment: r.S9.CENTER,
              text_position: r.Kw.CENTER,
              text_size: r.XX.LARGE,
              wrap_text: !0,
            },
            icon: `${a.Zt}/block_icons/links-block.png`,
            helpLink: "https://help.beacons.ai/en/articles/6508432-links-block",
          },
          [d.MARKETPLACE]: {
            displayName: "Marketplace",
            description: "Sell affiliate products from our Shopify partners.",
            shortDescription: "Earn affiliate commissions",
            defaultBlock: {},
            icon: `${a.Zt}/block_icons/website.svg`,
          },
          [d.MUSIC]: {
            displayName: "Music",
            description:
              "Embed Spotify, Apple Music, SoundCloud, and Bandcamp.",
            shortDescription: "Add any music",
            defaultBlock: { music_urls: [], custom_height: null },
            icon: `${a.Zt}/block_icons/music-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6715286-music-bandcamp-youtube-music-spotify-soundcloud",
          },
          [d.REQUESTS]: {
            buttonTitle: "Accept requests",
            displayName: "Fan Requests",
            description:
              "Accept commissions for things like shoutouts, TikTok duets, DMs, e.t.c.",
            shortDescription: "Make money from paid requests",
            defaultBlock: {
              menu: [],
              request_form_title: "Send me a request",
              skip_manual_approval_of_requests: !0,
              onboarding_completed: !1,
            },
            icon: `${a.Zt}/block_icons/requests-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6443857-fan-requests-block",
          },
          [d.REQUEST_FEED]: {
            displayName: "Request feed",
            description: "Show recent commissions.",
            shortDescription: "Interactions with followers",
            defaultBlock: { recent_requests: [] },
            icon: `${a.Zt}/block_icons/team.svg`,
          },
          [d.SHOPPABLECONTENT]: {
            buttonTitle: "Add TikTok Shopping",
            displayName: "TikTok shopping",
            description: "Embed TikTok shopping videos on your profile.",
            shortDescription: "Link to products featured on your TikTok videos",
            defaultBlock: {
              shop_title: "",
              shop_subtitle: "",
              shop_contents: [],
            },
            icon: `${a.Zt}/block_icons/shoppablecontent-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6439805-tiktok-shopping-block",
          },
          [d.SPACER]: {
            displayName: "Spacing and dividers",
            description: "Empty vertical space.",
            shortDescription: "Add space or dividers between your blocks",
            defaultBlock: { height: 50, seperator_style: "none" },
            icon: `${a.Zt}/block_icons/spacer-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6446622-spacer-block",
          },
          [d.SOCIAL]: {
            displayName: "X/Twitter",
            description: "Embed a Tweet",
            shortDescription: "Add a tweet",
            defaultBlock: { social_urls: [] },
            icon: `${a.Zt}/block_icons/x.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6439809-twitter-embed-urls",
          },
          [d.STORE]: {
            buttonTitle: "Set up store",
            displayName: "Store",
            description:
              "Sell your own digital products like ebooks, audio files, images, videos, and courses on Beacons.",
            shortDescription: "Sell your products",
            defaultBlock: {
              store_items: [],
              store_title: "Shop my products",
              store_subtitle: "",
              one_column_image_aspect_ratio: "3:2",
              layout_type: h.IMAGE_AND_TEXT_RIGHT,
              collapse_style: g.EXPOSED,
            },
            icon: `${a.Zt}/store_icons/store_icon_light_flat.webp`,
            onboarding_completed: !1,
            helpLink:
              "https://help.beacons.ai/en/collections/6666231-beacons-store",
          },
          [d.SUPPORT]: {
            buttonTitle: "Accept support",
            displayName: "Support",
            description:
              "Accept support directly from your fans. There are no transaction fees.",
            shortDescription: "Accept support from your followers",
            defaultBlock: {
              support_description: "Support my next big project",
              support_item: "coffee ☕",
              form_style: "button",
              unit_price: 3,
              button_text: "Buy me a coffee ☕️",
              card_title: "Support me",
            },
            icon: `${a.Zt}/block_icons/support-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6434765-support-block",
          },
          [d.TEXT]: {
            displayName: "Text",
            description: "Write an about me or a message.",
            shortDescription: "Add headlines and descriptions",
            defaultBlock: {
              title: "",
              description: "# Text!\n\nYou use Markdown to customize text.",
              center_text: !1,
              transparent_background: !1,
            },
            icon: `${a.Zt}/block_icons/text-block.png`,
            helpLink: "https://help.beacons.ai/en/articles/6446644-text-block",
          },
          [d.TOURS_AND_EVENTS]: {
            displayName: "Tours and Events",
            description: "Use Bandsintown to add dates (or do it manually)",
            shortDescription: "Automatically sync with BandsInTown and Seated",
            defaultBlock: { layout: "show-all", show_provider_logo: !0 },
            icon: `${a.Zt}/block_icons/tours-and-events-block.webp`,
            helpLink: "https://help.beacons.ai/en/articles/6446644-text-block",
          },
          [d.VIDEOS]: {
            displayName: "Videos",
            description: "Embed YouTube, TikTok, or Vimeo.",
            shortDescription: "Add your videos",
            defaultBlock: {
              videos: [{ url: "" }],
              headline: "",
              description: "",
              layout: b.COLUMN,
              collapse_style: L.EXPOSED,
              thumbnail: "",
              autopilot_on: !1,
              autopilot_url: "",
              autopilot_published_time: "",
            },
            icon: `${a.Zt}/block_icons/videos-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6439869-video-embed-urls-youtube-vimeo-tiktok",
          },
          [d.FOLLOWERS]: {
            displayName: "Follower Count",
            description:
              "Display your follower counts right on your Beacons page.",
            shortDescription: "Display your follower count",
            defaultBlock: { followers_counts: [] },
            icon: `${a.Zt}/block_icons/followers-block.png`,
            helpLink:
              "https://help.beacons.ai/en/articles/6446567-follower-counts-block",
          },
          [d.MEDIA_KIT_IN_LIB]: {
            displayName: "Media Kit",
            description: "Link to your media kit right from your Beacons page.",
            shortDescription: "Showcase your engagement with real time data",
            defaultBlock: {
              call_to_action: "",
              title: "",
              title_display_name: "",
            },
            icon: `${a.Zt}/block_icons/media_kit_icon_light_purple.webp`,
            helpLink: "https://help.beacons.ai/en/articles/6556009-media-kit",
          },
        },
        N = {
          square: { buttonBorderRadius: 2, cornerBorderRadius: 2 },
          round: { buttonBorderRadius: 36, cornerBorderRadius: 25 },
          fullWidth: { buttonBorderRadius: 0, cornerBorderRadius: 0 },
        },
        I = {
          full: {
            small: {
              spaceAboveUsername: 12,
              spaceBelowUsername: 8,
              iconPadding: 4,
              fontSize: 18,
              bioAndLocationFontSize: 12,
              bioAndLocationMarginLeft: 0,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 8,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 24,
              profilePictureSize: 100,
            },
            medium: {
              spaceAboveUsername: 14,
              spaceBelowUsername: 8,
              iconPadding: 6,
              fontSize: 19,
              bioAndLocationFontSize: 14,
              bioAndLocationMarginLeft: 0,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 8,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 26,
              profilePictureSize: 100,
            },
            big: {
              spaceAboveUsername: 16,
              spaceBelowUsername: 8,
              iconPadding: 8,
              fontSize: 21,
              bioAndLocationFontSize: 16,
              bioAndLocationMarginLeft: 0,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 8,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 28,
              profilePictureSize: 100,
            },
          },
          compact: {
            small: {
              spaceBelowUsername: 8,
              profPicMarginRight: 12,
              iconPadding: 4,
              fontSize: 18,
              bioAndLocationFontSize: 12,
              bioAndLocationMarginLeft: 0,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 4,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 24,
              profilePictureSize: 56,
            },
            medium: {
              spaceBelowUsername: 8,
              profPicMarginRight: 12,
              iconPadding: 5,
              fontSize: 20,
              bioAndLocationFontSize: 14,
              bioAndLocationMarginLeft: 4,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 6,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 26,
              profilePictureSize: 60,
            },
            big: {
              spaceBelowUsername: 8,
              profPicMarginRight: 12,
              iconPadding: 6,
              fontSize: 22,
              bioAndLocationFontSize: 16,
              bioAndLocationMarginLeft: 8,
              bioAndLocationMarginTop: 8,
              spaceBelowBio: 8,
              spaceBelowLocation: 8,
              locationOpacity: 0.8,
              iconSize: 28,
              profilePictureSize: 65,
            },
          },
        },
        O = { page_layout: [], media_kit: { hide_media_kit: !1 } },
        v = {
          compact: {
            limits: { min: 50, max: 80 },
            presets: [
              { name: "small", size: 50 },
              { name: "medium", size: 65 },
              { name: "large", size: 80 },
            ],
          },
          full: {
            limits: { min: 50, max: 300 },
            presets: [
              { name: "small", size: 80 },
              { name: "medium", size: 100 },
              { name: "large", size: 120 },
            ],
          },
        },
        R = (e) => ({ firebase_uid: e, page_layout: [] }),
        M = [
          "onlyfans",
          "pornhub",
          "manyvids",
          "modelhub",
          "18+",
          "nsfw",
          "sextpanther",
          "chaturbate",
          "avn.com",
          "fetlife",
          "myfreecams",
          "justfor.fans",
          "fansly",
          "fans.ly",
        ],
        C = {
          Poppins: 600,
          Saira: 500,
          Mulish: 600,
          Helvetica: 500,
          Roboto: 500,
        },
        B = {
          SQUARE: "square",
          ROUND: "round",
          FULL_WIDTH: "fullWidth",
          CUSTOM: "custom",
        },
        D = {
          BUTTON: { value: "button", label: "Button" },
          CARD: { value: "card", label: "Card" },
        },
        x = {
          NONE: "none",
          THIN: "thin",
          DASHED: "dash",
          THICK: "thick",
          ELLIPSES: "ellipses",
        },
        P = [
          { label: "Thin Line", value: x.THIN },
          { label: "Thick Line", value: x.THICK },
          { label: "Dashed Line", value: x.DASHED },
          { label: "Ellipsis", value: x.ELLIPSES },
          { label: "None", value: x.NONE },
        ],
        U = 5e5,
        H = 1e7,
        Z = { SMS: "sms", EMAIL: "email" },
        j = {
          BOTTOM_TABS: "bottomtabs",
          HAMBURGER: "hamburger",
          TOP_TABS: "toptabs",
        };
    },
    59384: function (e, t, o) {
      o.d(t, {
        ng: function () {
          return w;
        },
        bM: function () {
          return B;
        },
        RB: function () {
          return C;
        },
        dS: function () {
          return E;
        },
        $5: function () {
          return S;
        },
        wK: function () {
          return D;
        },
        km: function () {
          return v;
        },
        G5: function () {
          return O;
        },
        IZ: function () {
          return N;
        },
        T3: function () {
          return A;
        },
        MA: function () {
          return I;
        },
        uA: function () {
          return R;
        },
        Ee: function () {
          return d.Z;
        },
        ts: function () {
          return k;
        },
        CE: function () {
          return L;
        },
        sl: function () {
          return p.Z;
        },
        TV: function () {
          return f;
        },
        _v: function () {
          return g;
        },
        vI: function () {
          return T;
        },
        bL: function () {
          return x;
        },
        Bh: function () {
          return P;
        },
        w3: function () {
          return m.Z;
        },
        Nr: function () {
          return _.ZP;
        },
        ah: function () {
          return b.Z;
        },
        Ct: function () {
          return h;
        },
        tN: function () {
          return M;
        },
      });
      var n = o(43536),
        i = o(84027),
        r = o(27591),
        a = o(71006),
        s = o(27376),
        l = o.n(s),
        c = o(85384),
        u = o(22252),
        d = o(70284),
        p = o(38659);
      function f(e) {
        if (!e) return e;
        for (let t = e.length - 1; t > 0; t -= 1) {
          let o = Math.floor(Math.random() * (t + 1));
          [e[t], e[o]] = [e[o], e[t]];
        }
        return e;
      }
      var m = o(71096),
        _ = o(91713),
        b = o(92373);
      function h(e) {
        let [t, o] = (0, i.useState)(e),
          [n, r] = (0, i.useState)([]),
          [a, s] = (0, i.useState)([]),
          l = n.length > 0,
          c = a.length > 0,
          u = (0, i.useCallback)(() => {
            if (0 === n.length) return;
            let [e, ...i] = n,
              l = a.concat([t]);
            return o(() => e), r(() => i), s(() => l), e;
          }, [t, a, n]);
        return {
          undoValue: u,
          redoValue: (0, i.useCallback)(() => {
            if (0 === a.length) return;
            let [e, ...i] = a,
              l = n.concat([t]);
            return o(() => e), r(() => l), s(() => i), e;
          }, [t, a, n]),
          updateValue: (0, i.useCallback)(
            (e, i) => {
              let a = i || t,
                l = n.concat([a]);
              o(() => e), r(() => l), s(() => []);
            },
            [n, t]
          ),
          canUndo: l,
          canRedo: c,
          reset: (0, i.useCallback)(() => {
            o(() => e), r(() => []), s(() => []);
          }, []),
        };
      }
      let g = (e) => new Promise((t) => setTimeout(t, e)),
        E = (e) => Math.ceil(48 - (Date.now() - e) / 36e5);
      function L(e) {
        let t,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        t = Number.isInteger(e) && "string" != typeof e ? e : parseFloat(e);
        let a = [1, 1e3, 1e6, 1e9],
          s = i
            ? ["", " Thousand", " Million", " Billion"]
            : ["", "k", "M", "B"],
          l = a.map((e) => Math.abs(t) >= e - 1).filter(Boolean).length - 1;
        return o
          ? `${(100 * t).toFixed(n)}%`
          : "number" == typeof e && Number.isInteger(e) && e < 1e3
          ? (t / a[l]).toFixed(0) + s[l]
          : (t / a[l]).toFixed(r) + s[l];
      }
      function k(e) {
        return e.toLowerCase().includes("k") ||
          e.toLowerCase().includes("thousand")
          ? 1e3 * parseFloat(e)
          : e.toLowerCase().includes("m") || e.toLowerCase().includes("million")
          ? 1e6 * parseFloat(e)
          : e.toLowerCase().includes("b") || e.toLowerCase().includes("billion")
          ? 1e9 * parseFloat(e)
          : parseFloat(e);
      }
      function A(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "video";
        if (!e) return !1;
        let o = e.split("?")[0].split(".").slice(-1)[0].toLowerCase();
        switch (t) {
          case "video":
            return [
              "avi",
              "mp4",
              "mov",
              "wmv",
              "webm",
              "m4v",
              "ogm",
              "mpg",
              "ogv",
              "asx",
              "mpeg",
            ].includes(o);
          case "image":
            return [
              "apng",
              "bmp",
              "gif",
              "ico",
              "cur",
              "jpg",
              "jpeg",
              "jfif",
              "pjpeg",
              "pjp",
              "png",
              "svg",
              "tif",
              "tiff",
              "webp",
              "xbm",
            ].includes(o);
          default:
            return !1;
        }
      }
      function T(e) {
        let t,
          o,
          n,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 3e6;
        return e
          ? ("string" == typeof e
              ? ((t = parseInt(e.substring(1, 3), 16)),
                (o = parseInt(e.substring(3, 5), 16)),
                (n = parseInt(e.substring(5, 7), 16)))
              : ((t = e[0]), (o = e[1]), (n = e[2])),
            (299 * t + 587 * o * n * 114) / 1e3 > i ? "#1c1c1c" : "white")
          : "white";
      }
      class y extends Error {
        constructor(e, t) {
          super(e), (this.name = "BeaconsFetchError"), (this.statusCode = t);
        }
      }
      async function S(e) {
        let { url: t, ...o } = e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        for (let e = 0; e < n; e += 1) {
          let i, s, l;
          try {
            let e = t,
              n = {};
            if ("get" === o.method) {
              if (o.params) {
                let t = e.startsWith("/")
                    ? new URL(e, new URL(window.location.href))
                    : new URL(e),
                  n = t.search,
                  i = new URLSearchParams(n);
                for (let [e, t] of new URLSearchParams(o.params).entries())
                  i.set(e, t);
                (t.search = i.toString()), (e = t.toString());
              }
            } else
              o.data &&
                (n = {
                  ...n,
                  headers: {
                    ...(o.headers || {}),
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(o.data),
                });
            let r = { ...o, ...n },
              a = await fetch(e, r);
            if (
              ((l = a.status),
              (s = a.headers),
              (i = await a.text()),
              a.status >= 400)
            )
              throw (
                (403 === a.status &&
                  i?.includes("#challenge-success-text") &&
                  (i = "Cloudflare captcha (beacons message)"),
                520 === a.status &&
                  i?.includes("cf-wrapper") &&
                  (i = "Cloudflare web server unknown error (beacons message)"),
                522 === a.status &&
                  i?.includes("cf-wrapper") &&
                  (i = "Cloudflare connection timeout (beacons message)"),
                524 === a.status &&
                  i?.includes("cf-wrapper") &&
                  (i = "Cloudflare timeout (beacons message)"),
                525 === a.status &&
                  i?.includes("cf-wrapper") &&
                  (i = "Cloudflare SSL (beacons message)"),
                new y(`Status code ${a.status}: ${i}`, a.status))
              );
            return {
              data: JSON.parse(i),
              status: a.status,
              statusText: a.statusText,
              headers: a.headers,
            };
          } catch (d) {
            if (e === n - 1) {
              if (403 === l) return console.error(d), Promise.reject(d);
              let c = (e) => (e ? JSON.stringify(e, null, 2) : null),
                u = {
                  url: t,
                  method: o.method,
                  data: c("get" === o.method ? o.params : o.data),
                  headers: c(o.headers),
                  responseBody: i,
                  responseHeaders: s,
                  errorMessage:
                    d && "object" == typeof d && "message" in d
                      ? d.message
                      : "",
                  httpStatus: l,
                  maxTries: n,
                  currentTry: e + 1,
                };
              return (
                (0, r.$e)((e) => {
                  e.setExtras(u), (0, a.Tb)(d);
                }),
                console.error(d),
                Promise.reject(d)
              );
            }
            let c = 2 ** e * 1e3,
              u = Math.round(1e3 * Math.random());
            await g(c + u);
          }
        }
        return Promise.reject(Error("Some network request went really wrong."));
      }
      function w(e) {
        let { timeCreated: t, showColor: o = !0, daysAllowed: i = 7 } = e,
          r = Date.now(),
          a = (Date.parse(t) + 864e5 * i - r) / 1e3 / 3600 / 24,
          s = 24 * a,
          l = o ? { color: `hsla(${(120 * a) / 7}, 80%, 40%, 1)` } : {};
        return s < 24 && s > 0
          ? (0, n.jsxs)("strong", {
              style: l,
              children: [s.toFixed(0), " hours"],
            })
          : (0, n.jsxs)("strong", {
              style: l,
              children: [a.toFixed(0), " days"],
            });
      }
      function N(e) {
        let t = e.split("?")[0].split(".").slice(-1)[0].toLowerCase();
        for (let [e, o] of Object.entries(c.v)) if (o.includes(t)) return e;
        return "unknown";
      }
      let I = (e) => {
        if (e) {
          let t = e.start_unix_time ? e.start_unix_time : null,
            o = e.end_unix_time ? e.end_unix_time : null,
            n = Date.now();
          if (null === t && null === o) return !0;
          if (null === t && o) return o >= n;
          if (null === o && t) return t <= n;
          if (t && o) return t <= n && n <= o;
        }
        return !0;
      };
      function O(e) {
        return e.startsWith("/") || (e = `/${e}`), `https://cdn.beacons.ai${e}`;
      }
      function v(e) {
        let { cacheBust: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = t ? `?t=${new Date().getTime()}` : "";
        return `${O(e)}${o}`;
      }
      function R(e) {
        if (e.startsWith("mailto:")) {
          let t = e.split("mailto:");
          t.shift();
          let o = t.join().split("?"),
            n = o[0].split(/,|;/).every((e) => l()(e));
          if (n) return !0;
          if (n && o[1]) {
            let e = o[1]?.split("&")?.map((e) => e?.split("=")),
              t = { subject: 0, body: 0 },
              n = !0;
            if (
              (e.forEach((e) => {
                let o = e[0];
                2 !== e.length || ("subject" !== o && "body" !== o)
                  ? (n = !1)
                  : (t[o] += 1);
              }),
              t.subject <= 1 && t.body <= 1 && n)
            )
              return !0;
          }
        }
        return !1;
      }
      function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(e) &&
          (!e.startsWith("__") || t) &&
          !e.startsWith("deprecated")
        );
      }
      function C(e, t) {
        return t ? e / t : 0;
      }
      function B(e) {
        try {
          let t = e?.url ? e.url : "",
            o = e?.title ? e.title : "",
            n = e?.subtitle ? e.subtitle : "";
          return u.Ku.reduce(
            (e, i) =>
              e ||
              t.toLowerCase().includes(i) ||
              o.toLowerCase().includes(i) ||
              n.toLowerCase().includes(i),
            !1
          );
        } catch (e) {
          return !1;
        }
      }
      function D(e) {
        let t = e.components.theme;
        return t !== u.tm.CUSTOM && t in u.ML
          ? u.ML[t].buttonBorderRadius
          : e.components.custom_border_radius;
      }
      let x = (e, t, o, n, i) => (e ? t : o ? n : i),
        P = (e, t, o) => x(!!e, e, !!t, t, o);
    },
    70284: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return function e(t, o) {
            let r = { ...t };
            return (
              i(t) &&
                i(o) &&
                Object.keys(o).forEach((a) => {
                  let s = o[a];
                  if ((0, n.Kn)(s)) {
                    let o = (0, n.U4)(t, a) ? t[a] : void 0,
                      l = i(o) && i(s);
                    o && l
                      ? (0, n.Kn)(o) && Object.assign(r, { [a]: e(o, s) })
                      : Object.assign(r, { [a]: s });
                  } else Object.assign(r, { [a]: s });
                }),
              r
            );
          };
        },
      });
      var n = o(85757);
      let i = (e) => (0, n.Kn)(e) && !Array.isArray(e);
    },
    71096: function (e, t, o) {
      var n = o(84027),
        i = o(85757),
        r = o(70284);
      t.Z = function (e) {
        let [t, o] = (0, n.useState)(e),
          a = (0, n.useCallback)(
            (e) =>
              function (n) {
                let a =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  s =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (void 0 === t) return;
                let l = Array.from(t),
                  c = t[e];
                return (
                  a && (0, i.Kn)(c) && (0, i.Kn)(n)
                    ? s
                      ? (l[e] = (0, r.Z)(c, n))
                      : (l[e] = { ...t[e], ...n })
                    : (l[e] = n),
                  o(l),
                  l
                );
              },
            [t]
          ),
          s = (0, n.useCallback)(
            (e) => {
              if (void 0 === t)
                return { newArray: void 0, removedValue: void 0 };
              let n = Array.from(t),
                i = n.splice(e, 1);
              return o(n), { newArray: n, removedValue: i };
            },
            [t]
          ),
          l = (0, n.useCallback)(
            function (e) {
              let n,
                i =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
              if (void 0 !== t)
                return (
                  o(
                    (n = Array.isArray(e)
                      ? i
                        ? t.concat(e)
                        : e.concat(t)
                      : i
                      ? t.concat([e])
                      : [e].concat(t))
                  ),
                  n
                );
            },
            [t]
          );
        return {
          value: t,
          setValue: o,
          updateIndex: a,
          append: l,
          removeIndex: s,
        };
      };
    },
    91713: function (e, t, o) {
      o.d(t, {
        KA: function () {
          return r;
        },
        ZP: function () {
          return i;
        },
        y1: function () {
          return a;
        },
      });
      var n = o(84027);
      function i(e, t) {
        let [o, i] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            let o = setTimeout(() => {
              i(e);
            }, t);
            return () => {
              clearTimeout(o);
            };
          }, [e]),
          o
        );
      }
      function r(e, t, o) {
        let [r, a] = (0, n.useState)(e),
          s = i(e, t);
        (0, n.useEffect)(() => {
          s !== r && (a(s), o(s));
        }, [s, o, e, r]);
      }
      function a(e) {
        let { callbackFn: t, debounceMs: o } = e,
          i = (0, n.useRef)(t);
        (0, n.useEffect)(() => {
          i.current = t;
        }, [t]);
        let [r, a] = (0, n.useState)(0),
          s = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            if (!r) return;
            let e = s.current;
            "number" == typeof e && window.clearTimeout(e),
              (s.current = window.setTimeout(() => {
                i.current(), a(0);
              }, o));
          }, [r, o]),
          (0, n.useEffect)(
            () => () => {
              let e = s.current;
              "number" == typeof e && (window.clearTimeout(e), i.current());
            },
            []
          ),
          (0, n.useCallback)(() => a((e) => e + 1), [])
        );
      }
    },
    92373: function (e, t, o) {
      var n = o(84027);
      t.Z = function (e) {
        let [t, o] = (0, n.useState)(e),
          i = (0, n.useCallback)(
            function (e) {
              let n =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                i = "function" == typeof e ? e(t) : e;
              n ? o((e) => ({ ...e, ...i })) : o(i);
            },
            [t]
          );
        return { value: t, updateValue: i, setValue: o };
      };
    },
  },
]);
