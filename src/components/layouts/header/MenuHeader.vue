<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div class="menu-nav">
        <div class="items">
          <ul>
            <li class="item1">
              <img src="@/assets/menu.svg" alt="menu" />
              Todas as categorias
            </li>
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

.items ul {
  display: flex;
  padding: 0;
  margin: 0;
}

.items ul li {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 12px 20px;
  cursor: pointer;
}

.item1 {
  display: flex;
  align-items: center;
  width: auto;
  gap: 8px;
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
</style>
