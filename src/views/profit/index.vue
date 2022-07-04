<template>
  <div class="main my-main">
    <div class="my-top">
      <div class="avatar-name">
        <div class="avatar">
          <template v-if="!userInfo.headImg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3MzhFRkQxQjJGNjExRUNCNzM0RTc2RDhFQ0U4RkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3MzhFRkQyQjJGNjExRUNCNzM0RTc2RDhFQ0U4RkE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjczOEVGQ0ZCMkY2MTFFQ0I3MzRFNzZEOEVDRThGQTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjczOEVGRDBCMkY2MTFFQ0I3MzRFNzZEOEVDRThGQTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5L4AV2AAADAFBMVEUALWMG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" alt="" />
          </template>
          <template v-else>
            <img :src="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3MzhFRkQxQjJGNjExRUNCNzM0RTc2RDhFQ0U4RkE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3MzhFRkQyQjJGNjExRUNCNzM0RTc2RDhFQ0U4RkE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjczOEVGQ0ZCMkY2MTFFQ0I3MzRFNzZEOEVDRThGQTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjczOEVGRDBCMkY2MTFFQ0I3MzRFNzZEOEVDRThGQTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5L4AV2AAADAFBMVEUALWMGpOsCWpYBQHkGsvsFmd4DbKsEdrYCTIYFi84CXpsDcbACVZEGtP0CV5MAN24ANGsDZqQFoOYEeLkFis0BSoQBRX4DcK8BPXUCYJ4DdLQFougFn+QANm0CU44AIlcCZKIGs/wEfsACYJwEdLQCTokAIFQBRoADY6EAJVoAOG8BQ3wCXJkGqO8ALGIAK2EAKmAAJlsGrvYAJ1wAKF0AKV8GsPgAKF4Gr/cAK2AALmQAKl8AMWgFk9cGrfUGqfAGp+4GqvEAKV4ALGEAJ10FmN0BOnIGrPQGoOYGougFm+AAMWcANWwHtv8AJlwAM2oGneMGrPMGq/MGrfQBO3MGr/gAMGYALWQCVI8GsfkGqPAGoOUDaKYFl9wBOHACWZUEfb4BSYMGpewBRH0BOXEGqfEGpu0GqvIDbawGrvUAMmgAMmkBP3cGq/IFktYCWJQFltoDb64EgcMFkNQEiMsBQXoCTYgFltsALmUGsPkANW0AJFkGoecEgMICUo0FjNAALWIDc7MDaqkAL2YFicwAL2UFneMAMGcGoukCT4oCXZoCUYwFmuAAM2kFnOEGneICUIsDcrIEhMYEh8kBPnYEgsQFjM8Efr8DdrYBQnsFktUALGMFneIFjdEFlNgFldkEhsgDbq0Gn+QEc7MCX5wGtv8Ht/8EhcgBRn8FmNwFnOIGo+kFkdUEiMoDaqgEeroEhccBS4UGsfoDcrEDaacFmt8FlNkFj9MGrvcGr/YEe7wFmd0FnuMBO3IDaagFl9sEgMEAOHAHuP8BOXAHtf4Fj9IGp+0BP3gFjdAGnuQEg8UBSIIEersCWZYEg8YAJ1sGoegBOnEFm+EFktcEicsEe7sEd7cFltkEebkGnuMHtv4De7wDebkGo+oEh8oGm+EBTYgFjtEEdbYGoOcFk9gFldoDa6oCYp8DdbYAIVUAI1gALmMDa6kBNWwEjtIFjtIFjtMBPHMEhMcFhMYGpuwEhskFkdQDaKcGldoANGwGn+UEg8QDZKEDZqMBSYIAJlqb0VPvAAAHTklEQVR42uyZd1wbRxbHB7AwxgSUnGMgZ8zZd7ajy2l2tmi1Wgk1JARIIFSoBoVmejOYakzcbXDvvbe4h/TezunJXXLFx/W7XItzNddbLpldScbO53M4ktn/9PtI+9Hb3c/7zryZ92Z2BUBEEUUU0WQKEgTSYiENASfZs8acT5JmYHfUelNSvLVpOiCcUGsmgwNVJKkZmJlYPnb0grVgcH1U1PnBN6z7d1y+1P5gEkGSqtuCEBYS7my/Z/ezBoplOUoU95R45FjKMOvnU6NjAEkTYbbdQjb3TO+qpljsj+VsyvNrrYe7njjU1Xb2YI7RxgnEQu7VthVbnSSdGUbr+Z6rj9lYvZ7jjLIzydFVXue6Jh5CAvI6+yZvVfTi7RV1T3F6PavfPDZchEL1r6p5wcbaPKzbOpaQBeBATUlq8s8UUJSiKjm1ZGYSgLWz3+8wsXoX59k4qg4RgJKyKc59OPY+YK8qf/OFKDdVOOWvNbRwybJzcApHuaqtD62Mc8LXyi+0so3VKdpQu6C4U3m1Bvniz9zlYSmXyaBUKilZmhkArS6DwobB5KbYxvXf+U2WtvueusVk6GPc9B5IWPIqS9Urr4tdgpNN1dk/fsbUyBpnJAKfM4zZas7a3E8t8rtxefRUK/7RvzdfcYzFP+opvcdlKhMuGhrZ7Bg6jGm6XPPIw6J/Sr/+7N+nXdxsws64kQQ9jpbp4MVpXRU5HkpAGB4eOxBWumWaY/U2pdJzdEOWHaD0j4WWm+qqTUKsytMRsNcOd9oMShe3DYWbamTJudLSSguJCAjzN+iF5i4SO6WfnQ9hJiIVH5T23xUdbipjkY7pOQv88VW1iG0XtcjYrRJPMjELv+Ijl99GNUKkz+6PL6GTuYIAd64z0OhVPlp7m+UUBcdP9RMqCGicEawMEE3eqkBuY4OAwqskmHyRI9x1QKoUAOateoPfv8EVx0gAQL5fBKpG/XkvkgAAwX6PH2B7fA2UAADoPYFBoHZJESE8yo8WBsa4gZQEQM9uLPP3oD1fEoCq2ygWIkNZjVkSALEp1y0AWp8dICQBADRDLBb6P2ZCaQDkXnGUue/SQCJAqjhP2Y9JiQDMqBsXizL9Vql6gJ5bj9ccU3WLSqoHhDVH8BrtljVJNIlwjHY9idPsolQdwKMci9ccdgUpGSA/EScCFy8dwFxTZjC03s1IBiAcBa3179YiyQCQeF1v+3YxBNKN8hjHvWiR8FGZvLeQvURKCLDMs1EJtIQAbUr1on1mCQGwSJbtICQEAPXqDM0BKQHk1GVSjjEuFl9+XlqA+X/DjKQAqGuGQFqCxP4jAsS4oP894A3WDaZ4s4a48b1eUBMnukMeVJoOAugM2g65cHXdv4IXi7DFpznH/dt9aQEl8RNtoN82Lsw+vnlt9sKcWftUgG6vy14oKNuYimsoXX7+eLagqI4kBFDtlr9cf8ZFKWujckSVbZ9o54pSlmw8e9ATVSGrOIkfsGHfidxnrFbrMxvHhL0QmXzHuSMdHR0Vr8zDOxeUZfrTdQBQRffK8J3Wx3bvm3BXo9UWaUZL92iLgJCwvHo+o2YY/J1vwR0nF1+ZN5/G+vAaFADGB8YB8JpCuJNRpy/lJ06kzG++VVr5ib+bqp7kWL+2DakEwJS5jwpWQ4OPuBkAdf99fmVs7O/Ky1eW3KqcM1WllYFFy7zA+HKeoJddPWohRKfm5F25kpc3p/BB9c0A9FLdHadP5+Wd/sGpJerPDyhmsu4X9U6KEDFNd3sJVuKG1/Uz/QA1Csxh9PUfbxyJj4//2j9s20MAAF2xyi+gE4aEThf9KSo5P2B3n05Q8zoMqHtlqYIk033uh24JuPvUsgCAvn/wW7mivihMU/TRm//+fkFBwRblk0KIvMbWLdgqeGMwjkEvGR4XklH1Wv8tQ2S+r7chUPMJ3Rd6MwR17JETYDkx3SpaGfsPtWgBkTSjTbR6T+CpIZ/2tABA3rYVt958jydKJuN/1wvUwtTgecJvwkDlCEgNb6jjcHloNT/g4yYjaH/GCH3BIIj/9xcEAQgYrAiE+AlHvCMra81n+uM/9DmAnG8WqiGeyo4+IO8LfXFn1Nqvts3tOkbj8ourEq7CBA8Rj7uE265bPfPw0NioGvAIbZq2k1/dolUzobx+P8CPbp23qrbXefI/6Qt27IhPH2lviC6vId7+4Yu/h0//rWbproacFWd8xK/ndsrtv2rhM2J+27M1rujzRx+uWrl320DaT7/xh0vz7/1RdOe14R2rt//Zqat4/5/PgSPDxYo7105tW6YCjyw77i36ZQt/Yacu+YNjzaH8DWLJp1Xe3JhNgIw/dLlSserc4icuL22SHU1uWvO9bjXTMydu1okPdbmdWz4qksXwFd1mOj/kTTd0jqxDkEg7+aVuhDakxO3TwqHUaDsoGSCg/B37UAyCQycTm/kEOShxZIYziyAtBJUgSW0xYJAaHy0kPmWBwlttaEEBO3Aqoogiiug29KkAAwCOFzmFtcu+pQAAAABJRU5ErkJggg=='" alt="" />
          </template>
        </div>
        <div class="name-uid">
          <template v-if="userInfo && userInfo.username">
            <p>
              <span> {{ userInfo.username || '--' }}</span>
            </p>
            <p>ID: {{ userInfo.uid || '--' }}</p>
          </template>
          <template v-else>
            <p>{{ $t('my.txt34') }}</p>
          </template>
        </div>
      </div>
      <div class="opacity-60"></div>
      <div class="my-money-box">
        <div class="my-money-container">
          <div class="item">
            <div class="item-title">收入1</div>
            <p class="item-content">0฿</p>
          </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAADGCAYAAAD4z1GGAAAB3klEQVQ4T13IdVeTcRiA4ZePYyKKGNgtDMYYjO6GMRgjRncMxhiMblBRwe4kzI+l53ju3+M5z3/XuaKsQwl/LMuyov7jcCJzxKZxNIkRHEtmjts1olOYaAc4YRCTysQ4wUmDU2mMIDadiXWB0wZxGUxcJjgjyGLOZoNzghzmvEF8LhOfBy4I8pmLBeCSoJC5XKRxpZi5KihhrpWC64Iy5ka5xs0K5lalxu0qRnCnmrlbo5HgZhJrNWwexlYHkgyS6xmB3cvYG0CKgcPHOBpBqoGziXE2gzRBC5Nu4PIzrlaQIWhjMttBlqCDye4EOYIuJlfQzeT1gHxBL1PQp1HYzxQNaBQPMiWCIaZ0WKNshCkPaFSMMpVjGlVBRlA9ztSENNwTjDsMag08k4xnCtQZ1EcYgXea8c6ABgPfLOObA42CeaZpATQLFpkWA/8S418GrYIVpm0VtAvWmI51jc4NpkuwyXTfAz2C+0zvA42+Lab/ocbAI0Yw+JgZ2tYY3mFGnmgEnjKBZ2DUYOw5Iwi+YIIvwbhB6BUTeg0mDMJvmPBbMCl4x0wZRN4zkQ9gWvCRmfkEZgWfmbkvYF7wlVkQ7DKLe2BJsM8sH2isfGNWv2us/WDWBT+ZjV8am7//zV/EtX3igO1r7QAAAABJRU5ErkJggg==" alt="">
          <div class="item">
            <div class="item-title">收入2</div>
            <p class="item-content">0฿</p>
          </div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAADGCAYAAAD4z1GGAAAB3klEQVQ4T13IdVeTcRiA4ZePYyKKGNgtDMYYjO6GMRgjRncMxhiMblBRwe4kzI+l53ju3+M5z3/XuaKsQwl/LMuyov7jcCJzxKZxNIkRHEtmjts1olOYaAc4YRCTysQ4wUmDU2mMIDadiXWB0wZxGUxcJjgjyGLOZoNzghzmvEF8LhOfBy4I8pmLBeCSoJC5XKRxpZi5KihhrpWC64Iy5ka5xs0K5lalxu0qRnCnmrlbo5HgZhJrNWwexlYHkgyS6xmB3cvYG0CKgcPHOBpBqoGziXE2gzRBC5Nu4PIzrlaQIWhjMttBlqCDye4EOYIuJlfQzeT1gHxBL1PQp1HYzxQNaBQPMiWCIaZ0WKNshCkPaFSMMpVjGlVBRlA9ztSENNwTjDsMag08k4xnCtQZ1EcYgXea8c6ABgPfLOObA42CeaZpATQLFpkWA/8S418GrYIVpm0VtAvWmI51jc4NpkuwyXTfAz2C+0zvA42+Lab/ocbAI0Yw+JgZ2tYY3mFGnmgEnjKBZ2DUYOw5Iwi+YIIvwbhB6BUTeg0mDMJvmPBbMCl4x0wZRN4zkQ9gWvCRmfkEZgWfmbkvYF7wlVkQ7DKLe2BJsM8sH2isfGNWv2us/WDWBT+ZjV8am7//zV/EtX3igO1r7QAAAABJRU5ErkJggg==" alt="">
          <div class="item">
            <div class="item-title">收入3</div>
            <p class="item-content">0฿</p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-main-contaner">
      <div class="rec-with">
        <template v-if="userInfo && userInfo.username">
          <div @click="toGo('/deposit')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/depost.png" alt="" />
            </div>
            <p>{{ $t('my.txt4') }}</p>
          </div>
          <div @click="toGo('/withdrawal')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/withdraw.png" alt="" />
            </div>
            <p>{{ $t('my.txt5') }}</p>
          </div>
        </template>
        <template v-else>
          <div @click="$router.push('/register')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/reg-icon.png" alt="" />
            </div>
            <p>{{ $t('my.txt16') }}</p>
          </div>
          <div @click="$router.push('/login')">
            <div class="rec-icon">
              <img src="@/assets/image/otc/login-icon.png" alt="" />
            </div>
            <p>{{ $t('my.txt17') }}</p>
          </div>
        </template>
      </div>

      <!-- <whitdraw-box v-if="userAccount"></whitdraw-box> -->
      <!-- <van-swipe
        class="my-swipe"
        :autoplay="7000"
        indicator-color="#0094F6"
        :stop-propagation="false"
      >
        <van-swipe-item style="background-color:none">
          <div class="activity-container" @click="toService('tggroup')">
            <div class="activity-main"></div>
          </div>
        </van-swipe-item>
      </van-swipe> -->
      <div class="link-box">
        <div class="link-main" @click="toPath('/income')">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon12.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt6') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <div @click="toPath('/bankCard')" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon13.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt7') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <router-link
          tag="div"
          :to="{ path: '/inOutList', query: { type: 2 } }"
          class="link-main"
        >
          <div class="link-icon">
            <img src="@/assets/image/otc/icon17.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt11') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <router-link
          tag="div"
          :to="{ path: '/inOutList', query: { type: 1 } }"
          class="link-main"
        >
          <div class="link-icon">
            <img src="@/assets/image/otc/icon18.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt12') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <router-link tag="div" to="/problem" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon14.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt8') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
      </div>
      <div class="link-box" style="margin-top:10px;">
        <div class="link-main" @click="toService('whats')">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon15.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt9') }}</div>
          <van-icon class="arrow" name="arrow" />
        </div>
        <router-link tag="div" to="/about" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon16.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt10') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
        <!-- <router-link tag="div" to="/recruitment" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/cons/logo.png" alt="" />
          </div>
          <div class="link-name">Rekrutmen SunPower</div>
          <van-icon class="arrow" name="arrow" />
        </router-link> -->
        <router-link tag="div" to="/setting" class="link-main">
          <div class="link-icon">
            <img src="@/assets/image/otc/icon19.png" alt="" />
          </div>
          <div class="link-name">{{ $t('my.txt13') }}</div>
          <van-icon class="arrow" name="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixinsSerivce from '@/mixins/service'
export default {
  mixins: [mixinsSerivce],
  data() {
    return {
      showPopover: false,
      showPopover1: false,
      isShowBlance: false,
      isShowLoadding: false,
      news: [],
      incomeData: {
        incomeTeam: 0, //提成
        incomeToday: 0, // 今日收益
        incomeGrand: 0, // 累计收益
      },
      tgUrls: [],
      wathsrls: [],
      isApp: '',
      isWithdrawTime: false,
      treeData: null,
      treeData: {
        totalContribution: 0,
        yesterdayContribution: 0,
        mobilePhone: '',
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getQueryUser()
    })
  },
  // beforeRouteLeave(to, from, next) {
  //   // ...
  //   if (window.appInterface) {
  //     window.appInterface.setStatusColor('#ffffff')
  //   }
  //   next()
  // },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
      userAccount: 'user/userAccount',
      isBindBank: 'bankCard/isBindBank',
    }),
  },
  // activated() {
  //   if (this.userInfo && this.userInfo.username) {
  //     await this.queryAccountList()
  //     await this.getqueryIncome()
  //   }
  // },
  created() {
    this.isApp = sessionStorage.getItem('Revenue details')
  },
  methods: {
    ...mapActions({
      getUser: 'user/query',
      queryAccountList: 'user/queryAccountList',
      queryIncome: 'user/queryIncome',
      getBankCard: 'bankCard/getBankCard',
      getWtime: 'bankCard/getWtime',
      queryUserTreeNode: 'user/queryUserTreeNode',
    }),

    getData() {
      let params = {
        queryUserId: this.userInfo.id,
        isDirect: false,
      }
      this.queryUserTreeNode({}).then(res => {
        if (res.code == 0) {
          if (res.code == 0) {
            this.treeData = res.data[0]
            if (this.treeData) {
              this.secondNodes = this.treeData.childrenList || []
              let total = 0
              this.secondNodes.forEach(item => {
                total =
                  Number(total) + Number((item.totalContribution || 0) * 0.1)

                // console.log('total=', total)
                this.childrenCount += item.childrenList
                  ? item.childrenList.length
                  : 0
                // this.secondNodes[symbol] = item.childrenList
                item.threeNodes = item.childrenList || []
                // item.threeNodes.forEach(d => {
                //   total += d.totalContribution * 0.03
                // })
              })
              this.treeData.totalIncomeContribution = this.treeData.totalContribution
              this.treeData.totalIncome =
                (this.treeData.totalContribution || 0) + Number(total)
            }
          }
        }
      })
    },
    downLoad() {
      this.$utils.downApp()
    },

    _getWtime() {
      this.getWtime().then(res => {
        if (res.code == 0) {
          this.isWithdrawTime = res.data
        }
      })
    },
    // startStep() {
    //   let vm = this
    //   this.$nextTick(() => {
    //     let introJS = require('intro.js')
    //     introJS()
    //       .setOptions({
    //         nextLabel: '',
    //         doneLabel: 'Next',
    //         showBullets: false,
    //         overlayOpacity: 0.7,
    //         exitOnEsc: false,
    //         exitOnOverlayClick: false,
    //       })
    //       .start()
    //       .oncomplete(function() {
    //         vm.$router.push('/contract')
    //       })
    //   })
    // },
    isLogin() {
      if (!this.userInfo || !this.userInfo.username) {
        this.$router.push('/login')
        return false
      }
      return true
    },

    toSharePage() {
      if (this.isLogin()) {
        // this.$router.push('/sharePage')
        this.$router.push('/product')
      }
    },
    toPath(path) {
      let _path = path
      if (this.isLogin()) {
        this.$router.push({
          path: _path,
        })
      }
    },
    toGo(path) {
      let _path = path
      if (this.isLogin()) {
        if (!this.isBindBank && path == '/withdrawal') {
          if (!this.isWithdrawTime) {
            this.errDialog(this.$t('my.txt27'))
            return
          }
          this.$dialog
            .confirm({
              title: '',
              message: this.$t('dialog.txt8'),
              cancelButtonText: this.$t('dialog.txt2'),
              confirmButtonText: this.$t('dialog.txt7'),
            })
            .then(() => {
              this.$router.push({
                path: '/addcard',
                query: {
                  from: 'withdrawal',
                },
              })
            })
            .catch(() => {
              // on cancel
            })
          return
        }
        this.$router.push({
          path: _path,
        })
      }
    },
    getLevelName(level) {
      if (!level || level == 0) {
        return 'Free'
      } else {
        return 'VIP' + level
      }
    },
    getqueryIncome() {
      this.queryIncome().then(res => {
        if (res.code == 0) {
          if (res.data) {
            this.incomeData.incomeGrand = res.data.incomeGrand || 0
            this.incomeData.incomeTeam = res.data.incomeTeam || 0
            this.incomeData.incomeToday = res.data.incomeToday || 0
          }
        }
      })
    },
    async getQueryUser() {
      if (this.userInfo && this.userInfo.username) {
        await this.getUser()
        await this.queryAccountList()
        await this.getqueryIncome()
        await this.getBankCard()
        await this._getWtime()
        await this.getData()
      }
    },
    setBlanceState() {
      this.isShowBlance = !this.isShowBlance
    },
    getbroadData(n = 20) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(this.buildObj())
      }
      return arr
    },
    buildObj() {
      let random = () => {
        let demo = ''
        //这里取的是4位，所以for循环4次
        for (let i = 0; i < 9; i++) {
          //设置随机数范围,这设置为0 ~ 9
          let a = Math.floor(Math.random() * 9)
          //拼接字符串
          demo += a
        }
        return '****' + demo.substring(7, 9)
      }
      let n = this.randomNum(5, 50) // 1-50随机数
      let pre = [12, 14, 15, 16, 21, 23, 25, 31, 43, 85]
      let idx = this.randomNum(0, 9)
      // 12（CTBC电话公司）、14（巴西电信）、15（TELEFÔNICA）、16（CETERP）、21（ENBRATEL）、23（INTELIG）、25（GVT）、31（TELEMAR）、43（SERCOMTEL）、85（VÉSPER）
      let price = (n * 500).toFixed(0)
      let name = pre[idx] + random()
      let lang = localStorage.getItem('locale') || 'en_US'
      // 用户88***888   邀请了6个好友,领取了3R$
      // 用户88***888   下级收益提成R$xx
      let _title = ''
      _title = ` ${this.$t('sa.txt11')} ${n} ${this.$t('sa.txt47')} Rp ${price}`
      let obj = {
        title: name + _title,
      }
      return obj
    },
  },
}
</script>
<style lang="less" scoped>
  .my-main {
    background: #002046;
    .my-top {
      width: 100%;
      height: 200px;
      /*background: url('./../../assets/image/otc/mebg.png') no-repeat;*/
      /*background-size: cover;*/
      .avatar-name {
        padding: 20px 25px;
        display: flex;
        align-items: center;
        margin-bottom: 0px;
        .avatar {
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          background: #fff;
          border-radius: 100%;
          border: 2px solid #fff;
          margin-right: 15px;
          overflow: hidden;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .name-uid {
          p {
            font-size: 12px;
            color: #fff;
            font-weight: 500;
            &:nth-of-type(1) {
              display: flex;
              align-items: center;
              span {
                &:nth-of-type(1) {
                  font-size: 14px;
                  color: rgb(161, 223, 255);
                  max-width: 120px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  word-break: break-all;
                }
                &:nth-of-type(2) {
                  font-size: 10px;
                  color: #ff8f52;
                  margin-left: 20px;
                  flex: 0 0 60px;
                  width: 60px;
                  text-align: center;
                  height: 20px;
                  line-height: 20px;
                  background: #fff0cd;
                  border-radius: 20px;
                }
              }
            }
            &:nth-of-type(2) {
              margin-top: 8px;
            }
          }
        }
      }
      .opacity-60{
        width: 100%;
        border: 0.5px solid rgb(0, 89, 131, 0.6);
      }
      .my-money-box {
        width: 100%;
        height: 100px;
        border-radius: 0px 0px 15px 15px;
        border-bottom: 1px solid rgb(8, 168, 213);
        .my-money-container{
          display: flex;
          justify-content: center;
          align-content: center;
          text-align: center;
          height: 100px;
          padding: 0px 20px;
          .item {
            width: 100px;
            height: 100px;
            padding: 10px 5px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-content: center;
            text-align: center;
            .item-title {
              font-size: 14px;
              color: rgb(162, 223, 255);
            }
            .item-content {
              padding-top: 10px;
              font-size: 17px;
              color: #fff;
              font-weight: bold;
            }
          }
          img {
            display: block;
            margin-top: 10px;
            height: 90px;
          }
        }
      }
    }

    .my-main-contaner {
      padding: 0 14px;
      .rec-with {
        padding: 10px 0 16px 0;
        display: flex;
        & > div {
          flex: 1;
          background: #ffffff;
          border-radius: 20px;
          padding: 15px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .rec-icon {
            flex: 0 0 30px;
            width: 30px;
            img {
              width: 100%;
            }
          }
          p {
            font-size: 16px;
            color: #121212;
            font-weight: 600;
            margin-left: 12px;
          }
          &:nth-of-type(1) {
            margin-right: 7px;
          }
          &:nth-of-type(2) {
            margin-left: 7px;
          }
        }
      }
      .my-swipe {
        .activity-container {
          height: 92px;
          background: url('./../../assets/image/otc/jointg.png') no-repeat;
          background-size: cover;
          position: relative;
          .activity-main {
            position: absolute;
            left: 10px;
            top: 30px;
            p {
              color: #657fff;
              &:nth-of-type(2) {
                margin-top: 6px;
              }
            }
          }
        }
      }
      .link-box {
        background: #ffffff;
        border-radius: 10px;
        padding: 16px 24px;
        .link-main {
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          .link-icon {
            flex: 0 0 20px;
            width: 20px;
            img {
              width: 100%;
            }
          }
          .link-name {
            margin-left: 10px;
            font-size: 16px;
            color: #4a4a4a;
            font-weight: 500;
          }
          .arrow {
            margin-left: auto;
            color: #cccccc;
            font-size: 16px;
          }
          &:last-of-type {
            border: 0;
            margin-bottom: 0;
            padding-bottom: 0;
          }
        }
      }
    }
  }
</style>
