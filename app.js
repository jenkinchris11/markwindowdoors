const { createApp } = Vue;

createApp({
  data() {
    return {
      facebookUrl: 'https://www.facebook.com/p/Marks-Window-and-Doors-Repair-Specialist-100090305083564/',
      email: 'info@markswindowanddoors.com',
      experienceYears: 20,
      highlights: [
        { icon: '🛠️', title: 'Skilled repairs', copy: 'From sticky sliders to drafty frames, we fix the cause—not just the symptom.' },
        { icon: '🚚', title: 'On-site service', copy: 'We come equipped with the right parts and tools to keep your day moving.' },
        { icon: '👍', title: 'Clean, friendly care', copy: 'Transparent estimates, tidy workspaces, and respect for your home.' },
      ],
      repairs: [
        'Foggy or cracked glass',
        'Drafts and failing seals',
        'Roller, track, and hinge issues',
        'Sliding door alignment',
        'Locksets and hardware updates',
        'Screen replacement',
      ],
      services: [
        {
          icon: '🪟',
          title: 'Window repairs & tune-ups',
          copy: 'Re-seal, re-square, and refresh windows to improve insulation and smooth operation.',
          details: ['Recaulking and sealing', 'Balance and sash adjustments', 'Hardware replacement', 'Energy-efficiency checks'],
        },
        {
          icon: '🚪',
          title: 'Patio & entry doors',
          copy: 'Restore quiet, secure doors with smooth glides and reliable locks that stand up to daily use.',
          details: ['Roller and track repairs', 'Soft-close and glide tuning', 'Weatherstripping replacements', 'Handle and lock upgrades'],
        },
        {
          icon: '🧰',
          title: 'Emergency fixes',
          copy: 'Quick help for cracked panes, stuck doors, and leaks that can’t wait for later.',
          details: ['Temporary board-ups', 'Leak mitigation', 'Hardware stabilization', 'Follow-up replacement plans'],
        },
      ],
      galleryImages: [
        { src: 'MarkImages/467769600_527364233617075_596560543178351017_n.jpg', alt: "Gallery project photo 2" },
        { src: 'MarkImages/470134492_540280042325494_8946955470268142620_n.jpg', alt: "Gallery project photo 3" },
        { src: 'MarkImages/470135600_540279782325520_928757384190155396_n.jpg', alt: "Gallery project photo 4" },
        { src: 'MarkImages/470144501_540280038992161_3639408902819935915_n.jpg', alt: "Gallery project photo 5" },
        { src: 'MarkImages/470167645_540279788992186_8935730704615650606_n.jpg', alt: "Gallery project photo 6" },
        { src: 'MarkImages/470191098_540278968992268_719960735672616094_n.jpg', alt: "Gallery project photo 7" },
        { src: 'MarkImages/470195641_540280052325493_5217428317910690372_n.jpg', alt: "Gallery project photo 8" },
        { src: 'MarkImages/470211674_540278792325619_3568763404388959500_n.jpg', alt: "Gallery project photo 9" },
        { src: 'MarkImages/471552624_550382764648555_3496367144144752071_n.jpg', alt: "Gallery project photo 10" },
        { src: 'MarkImages/472375997_555414850812013_4494539520972044426_n.jpg', alt: "Gallery project photo 11" },
        { src: 'MarkImages/472714773_557261783960653_5804582433295254971_n.jpg', alt: "Gallery project photo 12" },
        { src: 'MarkImages/472752007_556561104030721_96022983348871142_n.jpg', alt: "Gallery project photo 13" },
        { src: 'MarkImages/472795642_557261510627347_6694146244308362854_n.jpg', alt: "Gallery project photo 14" },
        { src: 'MarkImages/473582865_564103846609780_7884054780010531918_n.jpg', alt: "Gallery project photo 15" },
        { src: 'MarkImages/473601336_562138930139605_3831051877728499451_n.jpg', alt: "Gallery project photo 16" },
        { src: 'MarkImages/474547244_590955897078432_1030090639929025899_n.jpg', alt: "Gallery project photo 17" },
        { src: 'MarkImages/476426475_582573391429492_7220769389574884027_n.jpg', alt: "Gallery project photo 18" },
        { src: 'MarkImages/476639732_582573414762823_7615206145461172108_n.jpg', alt: "Gallery project photo 19" },
        { src: 'MarkImages/476761126_582573061429525_8473697306907064470_n.jpg', alt: "Gallery project photo 20" },
        { src: 'MarkImages/476834906_582619124758252_354151477443425554_n.jpg', alt: "Gallery project photo 21" },
        { src: 'MarkImages/476868604_582573051429526_1575817513702610015_n.jpg', alt: "Gallery project photo 22" },
        { src: 'MarkImages/477183829_582573084762856_4127863897266127791_n.jpg', alt: "Gallery project photo 23" },
        { src: 'MarkImages/480404581_590151740671657_4597761610751304964_n.jpg', alt: "Gallery project photo 24" },
        { src: 'MarkImages/480567751_590151950671636_8852074202357315438_n.jpg', alt: "Gallery project photo 25" },
        { src: 'MarkImages/480589252_590925890594242_4546939246249759514_n.jpg', alt: "Gallery project photo 26" },
        { src: 'MarkImages/480599602_591362243883940_6255827420694380260_n.jpg', alt: "Gallery project photo 27" },
        { src: 'MarkImages/480647835_590151594005005_197941601017345952_n.jpg', alt: "Gallery project photo 28" },
        { src: 'MarkImages/480672985_590925887260909_7864287511076147543_n.jpg', alt: "Gallery project photo 29" },
        { src: 'MarkImages/480704234_596479636705534_51485325599854989_n.jpg', alt: "Gallery project photo 30" },
        { src: 'MarkImages/480706553_596480066705491_6948521781541333258_n.jpg', alt: "Gallery project photo 31" },
        { src: 'MarkImages/480723885_590151610671670_4372858444246566897_n.jpg', alt: "Gallery project photo 32" },
        { src: 'MarkImages/480726852_590922367261261_1977587465056482602_n.jpg', alt: "Gallery project photo 33" },
        { src: 'MarkImages/480750610_590151590671672_2472110766151329121_n.jpg', alt: "Gallery project photo 34" },
        { src: 'MarkImages/480751415_590151834004981_8258555284494211032_n.jpg', alt: "Gallery project photo 35" },
        { src: 'MarkImages/480791526_596765836676914_5468312425106768608_n.jpg', alt: "Gallery project photo 36" },
        { src: 'MarkImages/480804431_596403550046476_8675690632573515830_n.jpg', alt: "Gallery project photo 37" },
        { src: 'MarkImages/480808470_590922417261256_1528460441383428458_n.jpg', alt: "Gallery project photo 38" },
        { src: 'MarkImages/480827110_590926000594231_1967449654823274587_n.jpg', alt: "Gallery project photo 39" },
        { src: 'MarkImages/480868928_591361930550638_3029500505863063448_n.jpg', alt: "Gallery project photo 40" },
        { src: 'MarkImages/480871303_591362267217271_4686293609806802562_n.jpg', alt: "Gallery project photo 41" },
        { src: 'MarkImages/480875807_596403580046473_1503797109995691107_n.jpg', alt: "Gallery project photo 42" },
        { src: 'MarkImages/480879594_590152007338297_764995058830363551_n.jpg', alt: "Gallery project photo 43" },
        { src: 'MarkImages/480882441_596403656713132_9098164320758561109_n.jpg', alt: "Gallery project photo 44" },
        { src: 'MarkImages/480886327_590922387261259_7700319561850617616_n.jpg', alt: "Gallery project photo 45" },
        { src: 'MarkImages/480914514_596403606713137_8984312795854058550_n.jpg', alt: "Gallery project photo 46" },
        { src: 'MarkImages/480917403_590151874004977_67453272050650381_n.jpg', alt: "Gallery project photo 47" },
        { src: 'MarkImages/480964653_590151734004991_1648930090395246390_n.jpg', alt: "Gallery project photo 48" },
        { src: 'MarkImages/480967195_591362177217280_5525941387053442572_n.jpg', alt: "Gallery project photo 49" },
        { src: 'MarkImages/481011423_591361923883972_4478069132040816355_n.jpg', alt: "Gallery project photo 50" },
        { src: 'MarkImages/481021506_591361937217304_333430745215983248_n.jpg', alt: "Gallery project photo 51" },
        { src: 'MarkImages/481045844_591362173883947_210937637523192250_n.jpg', alt: "Gallery project photo 52" },
        { src: 'MarkImages/481055368_591362170550614_6724215749386251480_n.jpg', alt: "Gallery project photo 53" },
        { src: 'MarkImages/481055839_596765906676907_5040623084705387365_n.jpg', alt: "Gallery project photo 54" },
        { src: 'MarkImages/481056376_591362193883945_8422979791443120004_n.jpg', alt: "Gallery project photo 55" },
        { src: 'MarkImages/481084258_590925880594243_2590234159044416522_n.jpg', alt: "Gallery project photo 56" },
        { src: 'MarkImages/481101051_595685906784907_2068552529468422392_n.jpg', alt: "Gallery project photo 57" },
        { src: 'MarkImages/481122167_596663700020461_8718290305422431329_n.jpg', alt: "Gallery project photo 58" },
        { src: 'MarkImages/481149560_596765876676910_907808621410256629_n.jpg', alt: "Gallery project photo 59" },
        { src: 'MarkImages/481177680_596765820010249_2856009965042391892_n.jpg', alt: "Gallery project photo 60" },
        { src: 'MarkImages/481195695_596765843343580_6984770841192263814_n.jpg', alt: "Gallery project photo 61" },
        { src: 'MarkImages/481208299_599344743085690_7438873110345953080_n.jpg', alt: "Gallery project photo 62" },
        { src: 'MarkImages/481215779_596765823343582_7977157547062634179_n.jpg', alt: "Gallery project photo 63" },
        { src: 'MarkImages/481229659_590151704004994_2053606589698774130_n.jpg', alt: "Gallery project photo 64" },
        { src: 'MarkImages/481249909_599344716419026_5384533377850911260_n.jpg', alt: "Gallery project photo 65" },
        { src: 'MarkImages/481256677_599344776419020_7387494008232702620_n.jpg', alt: "Gallery project photo 66" },
        { src: 'MarkImages/481262277_596479613372203_7008744032523962949_n.jpg', alt: "Gallery project photo 67" },
        { src: 'MarkImages/481268563_596765913343573_3483539833578788649_n.jpg', alt: "Gallery project photo 68" },
        { src: 'MarkImages/481279479_596765920010239_2650143598677575459_n.jpg', alt: "Gallery project photo 69" },
        { src: 'MarkImages/481281132_599343456419152_7800226768104288404_n.jpg', alt: "Gallery project photo 70" },
        { src: 'MarkImages/481288555_599344526419045_8953758193773328217_n.jpg', alt: "Gallery project photo 71" },
        { src: 'MarkImages/481295803_590151627338335_1934372073573428566_n.jpg', alt: "Gallery project photo 72" },
        { src: 'MarkImages/481307100_596765930010238_7067361658717967939_n.jpg', alt: "Gallery project photo 73" },
        { src: 'MarkImages/481456627_599344713085693_7197997342168879691_n.jpg', alt: "Gallery project photo 74" },
        { src: 'MarkImages/481463941_596765813343583_2033674434084303084_n.jpg', alt: "Gallery project photo 75" },
        { src: 'MarkImages/481660752_596479906705507_9130431697646344932_n.jpg', alt: "Gallery project photo 76" },
        { src: 'MarkImages/481785972_601744119512419_5307328090082544742_n.jpg', alt: "Gallery project photo 77" },
        { src: 'MarkImages/481819901_596480030038828_699040820315338586_n.jpg', alt: "Gallery project photo 78" },
        { src: 'MarkImages/481894418_601743939512437_7161966552189378217_n.jpg', alt: "Gallery project photo 79" },
        { src: 'MarkImages/481917506_599344726419025_2188753575788586711_n.jpg', alt: "Gallery project photo 80" },
        { src: 'MarkImages/481955004_601694972850667_748531847857502672_n.jpg', alt: "Gallery project photo 81" },
        { src: 'MarkImages/481959410_599344473085717_5328178334959038642_n.jpg', alt: "Gallery project photo 82" },
        { src: 'MarkImages/481960196_601694909517340_7466179315069508045_n.jpg', alt: "Gallery project photo 83" },
        { src: 'MarkImages/481975814_601694996183998_9104624975691774494_n.jpg', alt: "Gallery project photo 85" },
        { src: 'MarkImages/481976521_601698369516994_6596201933024754906_n.jpg', alt: "Gallery project photo 86" },
        { src: 'MarkImages/481977740_601698239517007_8298234377017752318_n.jpg', alt: "Gallery project photo 87" },
        { src: 'MarkImages/481980587_599348519751979_3017481802920233344_n.jpg', alt: "Gallery project photo 88" },
        { src: 'MarkImages/481994179_599343676419130_6316937219037640581_n.jpg', alt: "Gallery project photo 89" },
        { src: 'MarkImages/481995165_597369946616503_902468452710380174_n.jpg', alt: "Gallery project photo 90" },
        { src: 'MarkImages/481997063_602450642775100_3712910443525467093_n.jpg', alt: "Gallery project photo 91" },
        { src: 'MarkImages/481998562_602450702775094_1648001006859509093_n.jpg', alt: "Gallery project photo 92" },
        { src: 'MarkImages/481999306_602450689441762_1913552784005222474_n.jpg', alt: "Gallery project photo 93" },
        { src: 'MarkImages/482004255_596479983372166_2342316516786620039_n.jpg', alt: "Gallery project photo 94" },
        { src: 'MarkImages/482005448_599343523085812_7353367710291067404_n.jpg', alt: "Gallery project photo 95" },
        { src: 'MarkImages/482008066_596765816676916_1110856659550223665_n.jpg', alt: "Gallery project photo 96" },
        { src: 'MarkImages/482012083_601694946184003_8600735165879830440_n.jpg', alt: "Gallery project photo 97" },
        { src: 'MarkImages/482025379_602450662775098_382238328764675282_n.jpg', alt: "Gallery project photo 98" },
        { src: 'MarkImages/482029441_599348263085338_2932423454234204555_n.jpg', alt: "Gallery project photo 99" },
        { src: 'MarkImages/482031219_602450752775089_2269310819838280479_n.jpg', alt: "Gallery project photo 100" }
      ],
      form: {
        name: '',
        contact: '',
        location: '',
        details: '',
        botField: '',
      },
      confirmation: '',
      formError: '',
      isSubmitting: false,
      selectedImage: null,
    };
  },
  methods: {
    openGalleryModal(image) {
      this.selectedImage = image;
    },
    closeGalleryModal() {
      this.selectedImage = null;
    },
    encodeFormData(data) {
      return new URLSearchParams(data).toString();
    },
    async submitForm() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      this.confirmation = '';
      this.formError = '';

      try {
        const payload = {
          'form-name': 'contact',
          ...this.form,
        };

        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encodeFormData(payload),
        });

        this.confirmation = 'Thanks for reaching out! We will contact you to schedule your repair.';
        this.form = { name: '', contact: '', location: '', details: '', botField: '' };
      } catch (error) {
        this.formError = 'Something went wrong sending your request. Please try again or message us on Facebook.';
      } finally {
        this.isSubmitting = false;
      }
    },
  },
}).mount('#app');
