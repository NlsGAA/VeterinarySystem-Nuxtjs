<script></script>

<template>
  <div>
    <div>Guest Layout</div>
    <div>
      <ul>
        <li>
          <NuxtLink href="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/register">Register</NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <slot></slot>
</template>

<style>
body {
  background-color: #14919b;
}
</style>
