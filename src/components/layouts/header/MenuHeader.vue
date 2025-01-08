v
<script setup>
import { ref } from 'vue'

const showCategories = ref(false)

function toggleCategories() {
  showCategories.value = !showCategories.value
}
</script>

<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div class="menu-nav">
        <div class="items">
          <ul class="ul-dropdown">
            <li class="item1" @click="toggleCategories">
              <img src="@/assets/menu.svg" alt="menu" />
              Todas as categorias
            </li>
            <div v-show="showCategories" class="dropdown-categories">
              <li class="item6">Smartphones</li>
              <li class="item7">Notebooks</li>
              <li class="item8">Consoles</li>
              <li class="item9">Headphones</li>
            </div>
          </ul>
          <ul class="ul-menu">
            <li class="item2">Smartphones</li>
            <li class="item3">Notebooks</li>
            <li class="item4">Consoles</li>
            <li class="item5">Headphones</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-top: 1px solid #edeef1;
  border-bottom: 1px solid #edeef1;
}

.menu {
  width: 100%;
  max-width: 1248px;
  height: 42px;
}

.menu-nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 16px;
}

.items {
  display: flex;
  align-items: center;
  color: #667085;
  font-size: 12px;
  line-height: 18px;
  padding: 0;
  gap: 8px;
}

.ul-menu {
  display: flex;
  padding: 0;
  margin: 0;
}

.ul-dropdown {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.ul-dropdown li {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 12px 20px;
  cursor: pointer;
}

.items ul li {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 12px 20px;
  cursor: pointer;
}

.dropdown-categories {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #edeef1;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  margin-top: 42px;
  z-index: 1000;
  width: 200px;
}

.dropdown-categories li {
  padding: 8px 16px;
  transition: background-color 0.3s ease;
}

.dropdown-categories li:hover {
  background-color: #f5f5f5;
}

.item1 {
  display: flex;
  align-items: center;
  width: auto;
  gap: 8px;
  position: relative;
}

.item2,
.item3,
.item4,
.item5 {
  width: auto;
}

.menu-nav .items ul li img {
  margin-right: 8px;
}

@media screen and (max-width: 768px) {
  .ul-menu {
    display: none;
  }
  .ul-dropdown {
    width: 100%;
  }

  .item1 {
    width: 100%;
    justify-content: center;
  }

  .dropdown-categories {
    width: calc(100% - 32px);
    margin-left: 16px;
  }
}
</style>
