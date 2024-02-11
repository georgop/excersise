<template>
  <transition name="fade">
      <div v-if="props.isExpanded" class="user-card-container-expanded">
        <div class="user-card-container-expanded-left">
          <div class="user-card-container-expanded-avatar">
            <img src="../assets/user.jpg" alt="user-avatar" class="user-card-container-expanded-avatar-image"/>
          </div>
          <div class="user-card-container-expanded-details">
            <span class="user-card-container-expanded-details-email">{{user.email}}</span>
            <span class="user-card-container-expanded-details-street">{{user.address.street}}, {{user.address.suite}}</span>
            <span class="user-card-container-expanded-details-zipcode">{{user.address.zipcode}}, {{user.address.city}}</span>
          </div>
        </div>
        <Loading :isLoading="isLoading"/>
        <div class="user-card-container-expanded-location">
          <span class="user-card-container-expanded-location-country">{{location?.country}}</span>
          <span class="user-card-container-expanded-location-state">{{location?.state}}</span>
          <span class="user-card-container-expanded-location-city">{{location?.city}}</span>
        </div>
        <div v-if="error">Error</div>
      </div>
    </transition>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {User} from '../models/User';
import {useGetLocationData} from "../composables/useGetLocationData.ts";
import Loading from "./Loading.vue";

const props = defineProps<{
  user: User,
  isExpanded: boolean
}>()

const {getLocation,location,isLoading,error} = useGetLocationData()
onMounted(()=>{
  getLocation(props.user.address.geo.lat,props.user.address.geo.lng)
})
</script>

<style scoped lang="scss">
.user-card-container {
  &-expanded {
    height: 100%;
    padding: 15px 35px;
    border: 1px solid #e7e7e7;
    border-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-left{
      display:flex;
      align-items:center;
    }

    &-avatar {
      &-image {
        width: 85px;
        height: 85px;
        border-radius: 50%;
      }
    }

    &-details , &-location{
      margin-left: 25px;
      display:flex;
      flex-direction:column;
      font-size:13px;
      &-email , &-country{
        color:#00a6e5;
      }
      &-street,&-zipcode,&-state,&-city{
        color:#777777;
      }
      &-street{
        margin-top:5px;
      }
      &-state{
        margin-top:5px;
      }
    }
    &-location{
      display:flex;
      flex-direction:column;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media only screen and (max-width: 600px) {
  .user-card-container-expanded {
    flex-direction:column;
    font-size:12px;
  }
  .user-card-container-expanded-avatar-image{
    width:50px;
    height:50px;
  }
}

</style>