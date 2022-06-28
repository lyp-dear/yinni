<template>
  <modMain title="More">
    <div class="main person-more" v-if="moreData && moreData.length">
      <div
        class="person-box"
        v-for="item in moreData"
        @click="showPerson(item)"
      >
        <img v-if="item.headImg" :src="imgBaseUrl + item.headImg" alt="" />
        <img v-else src="@/assets/image/xapp/icon_home_default.png" alt="" />

        <p class="name line05">
          {{
            item.username.substring(0, 2) +
              '****' +
              item.username.substring(
                item.username.length - 3,
                item.username.length
              )
          }}
        </p>
        <p class="bot">
          {{ $t('sa.txt63') }}:
          <span class="green">{{
            item.childrenList ? item.childrenList.length : 0
          }}</span>
        </p>
      </div>
    </div>
    <no-data v-else></no-data>
  </modMain>
</template>
<script>
import { bus } from '@/utils/bus'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      moreData: 'user/getMoreData',
    }),
  },
  methods: {
    showPerson(data = {}) {
      bus.$emit('showPerson', data)
    },
  },
}
</script>
