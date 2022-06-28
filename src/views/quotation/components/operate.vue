<template>
  <div class="operate">
    <div class="operate-tit">{{ $t('index.txt27') }}</div>
    <div class="operate-list">
      <div class="operate-list-info">
        <div class="list-number">
          <span> <i>1</i> </span>
        </div>
        <div class="list-left">
          <p>
            {{ $t('index.txt28') }}
          </p>
          <p>{{ $t('index.txt29') }}</p>
        </div>
        <div class="icon">
          <img src="@/assets/image/cons/icon5.png" alt="" />
        </div>
      </div>
      <div class="operate-list-info">
        <div class="list-number">
          <span> <i>2</i> </span>
        </div>
        <div class="list-left">
          <p>
            {{ $t('index.txt30') }}
          </p>
          <p>{{ $t('index.txt31') }}</p>
        </div>
        <div class="icon">
          <img src="@/assets/image/cons/icon6.png" alt="" />
        </div>
      </div>
      <div class="operate-list-info">
        <div class="list-number">
          <span> <i>3</i> </span>
        </div>
        <div class="list-left">
          <p>
            {{ $t('index.txt32') }}
          </p>
          <p>{{ $t('index.txt33') }}</p>
        </div>
        <div class="icon">
          <img src="@/assets/image/cons/icon7.png" alt="" />
        </div>
      </div>
      <div class="operate-list-info">
        <div class="list-number">
          <span> <i>4</i> </span>
        </div>
        <div class="list-left">
          <p>
            {{ $t('index.txt34') }}
          </p>
          <p>{{ $t('index.txt35') }}</p>
        </div>
        <div class="icon">
          <img src="@/assets/image/cons/icon8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.operate {
  margin-top: 25px;
  .operate-tit {
    font-size: 16px;
    color: #121212;
    font-weight: 500;
  }
  .operate-list {
    margin-top: 16px;
    .operate-list-info {
      background: rgba(0, 0, 0, 0.02);
      border-radius: 19px;
      padding: 16px 14px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      .list-number {
        flex: 0 0 20px;
        width: 20px;
        margin-right: 10px;
        span {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: #0094f6;
          line-height: 20px;
          color: #fff;
          box-sizing: border-box;
          padding-left: 4px;
          display: block;
        }
      }
      p {
        font-size: 16px;
        color: #000000;
        font-weight: 500;
        &:nth-of-type(2) {
          font-size: 12px;
          color: #8b8c8d;
          margin-top: 8px;
        }
      }
      .icon {
        flex: 0 0 36px;
        width: 36px;
        margin-left: auto;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
