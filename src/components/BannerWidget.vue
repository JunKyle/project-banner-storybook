<template>
  <div class="BannerWidget">
    <div class="BannerWidget__card">
      <span class="BannerWidget__title" 
            v-if="item.title">{{item.title}}</span>
      <div class="BannerWidget__date">
        <span class="BannerWidget__dateItem"
              v-if="item.begin_at">{{moment(item.begin_at).lang('fr').format('ddd DD MMM.')}}</span> - 
        <span class="BannerWidget__dateItem"
              v-if="item.end_at">{{moment(item.end_at).lang('fr').format('ddd DD MMM.')}}</span>
      </div>
      <p class="BannerWidget__description"
         v-if="item.description">{{item.description}}</p>
      <div class="BannerWidget__info">
          <PictoComponent class="BannerWidget__infoIcon icon icon--purple"
                          :icon="'fa-location-dot'" />
          <span class="BannerWidget__infoText">{{item._embedded.address.zip + ' ' + item._embedded.address.city}}</span>
      </div>
      <div class="BannerWidget__info"
           v-if="item.is_webinar">
          <PictoComponent class="BannerWidget__infoIcon icon icon--purple"
                          :icon="'fa-video-camera'" />
          <span class="BannerWidget__infoText">Disponible en ligne</span>
      </div>
      <CallToAction class="BannerWidget__button button button--purple"
                    :label="'En savoir plus'"
                    :background-color="'#8700c5'"
                    :url="item.web_url"
                    v-if="item.web_url"/>
    </div>
    <div class="BannerWidget__cover"
         v-if="item.cover">
      <img class="BannerWidget__coverImage" 
           :src="item.cover" 
           :alt="item.id" />
    </div>
  </div>
</template>

<script>
import CallToAction from './CallToAction.vue';
import PictoComponent from './PictoComponent.vue';

export default {
  name: 'BannerWidget',
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  components: {
    CallToAction,
    PictoComponent
  }
}
</script>

<style scoped lang="scss">
.BannerWidget {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 9px rgba(194,194,194,0.75);

  &__card {
    padding: 16px;
    text-align: left;
    position: relative;
  }

  &__title {
    display: block;
    color: #000000;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__description {
    display: block;
    color: #000000;
    font-size: 16px;
  }

  &__date {
    display: inline;
    padding: 5px;
    background-color: #eddff0;
    color: #cb48df;
    font-size: 16px;

    &Item {
      font-size: 12px;
      text-transform: uppercase;
    }
  }

  &__info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;

    &Icon {
      margin-right: 5px;
    }

    &Text {
      font-size: 12px;
      color: #8b8b8b;
    }
  }

  &__button {
    width: 100%;
  }

  &__cover {
    overflow: hidden;

    &Image {
      width: 100%;
      border-radius: 0 0 10px 10px;
      display: block;
    }
  }

  @media (min-width: 950px) {
    justify-content: space-between;
    flex-direction: row;
    max-height: 350px;

    &__card {
      width: 50%;
    }

    &__cover {
      width: 50%;

      &Image {
        border-radius: 0 10px 10px 0;
      }
    }

    &__button {
      width: auto;
      position: absolute;
      bottom: 12px;
    }
  }
}
</style>
