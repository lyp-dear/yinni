<template>
  <modMain :title="$t('sa.txt159')">
    <div class="membership">
      <div
        class="member-level"
        :class="{ done: userInfo.level == index }"
        v-for="(item, index) in memberData"
      >
        <div class="current-level" v-if="userInfo.level == index">
          {{ $t('sa.txt160') }}
        </div>
        <img :src="item.img" alt="" />
        <div class="right">
          <h2>{{ item.name }}</h2>
          <p>
            <span>{{ $t('sa.txt152') }}:</span>
            <spn>{{ item.teamamount }}</spn>
          </p>
          <p>
            <span>{{ $t('sa.txt153') }}:</span>
            <spn>{{ item.revenue }}</spn>
          </p>
          <p>
            <span>{{ $t('sa.txt154') }}:</span>
            <spn>{{ item.daily }}</spn>
          </p>
        </div>
      </div>
    </div>
  </modMain>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      memberData: [
        {
          img: require('@/assets/image/xapp/free.png'),
          name: this.$t('sa.txt146'),
          teamamount: '--',
          revenue: '20.00%',
          daily: '70',
        },
        {
          img: require('@/assets/image/xapp/vip1.png'),
          name: this.$t('sa.txt147'),
          teamamount: '100Rp',
          revenue: '15.00%',
          daily: '60',
        },
        {
          img: require('@/assets/image/xapp/vip2.png'),
          name: this.$t('sa.txt148'),
          teamamount: '$1000',
          revenue: '12.00%',
          daily: '50',
        },
        {
          img: require('@/assets/image/xapp/vip3.png'),
          name: this.$t('sa.txt149'),
          teamamount: '$1000',
          revenue: '10.00%',
          daily: '40',
        },
        {
          img: require('@/assets/image/xapp/vip4.png'),
          name: this.$t('sa.txt150'),
          teamamount: '--',
          revenue: '8.00%',
          daily: '30',
        },
        {
          img: require('@/assets/image/xapp/vip5.png'),
          name: this.$t('sa.txt151'),
          teamamount: '--',
          revenue: '1.00%',
          daily: '0',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    }),
  },
}
</script>
