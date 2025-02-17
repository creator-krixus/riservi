<template>
  <div>
    <div id="contenedor">
      <div class="bloque1">
        <p>Este es el Bloque 1 dentro del contenedor.</p>
      </div>
      <div class="bloque2">
        <p>Este es el contenido del Bloque 2 dentro del contenedor, este contiene más texto, por eso debe ser más largo.</p>
      </div>

      <div class="clear"></div>
    </div>

    <div class="bloque1">
      <p>Este es el Bloque 1 fuera del contenedor.</p>
    </div>

    <div class="bloque2">
      <p>Este es el Bloque 2 fuera del contenedor.</p>
    </div>

    <div class="v-container">
      <div 
        v-for="(item, index) in myArray" 
        :key="item.id" 
        :class="{ 'gray-bg': index % 2 !== 0, 'hidden': index % 2 === 0 }"
      >
        Nombre: {{ item.name }}, Roles: {{ item.roles.join(", ") }}
      </div>
    </div>

    <div class="btn" @click="generateOutput">
      Generar 
    </div>

    <div class="output">
      {{ output }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView',
  data() {
    return {
      myArray: [
        { id: 1, name: 'Carlos', roles: [1, 2] },
        { id: 2, name: 'Ana', roles: [3, 4] },
        { id: 3, name: 'Luis', roles: [5, 6] },
        { id: 4, name: 'María', roles: [7, 8] },
        { id: 5, name: 'Pedro', roles: [9, 10] }
      ],
      output: ""
    };
  },
  computed: {
    totalList() {
      return this.myArray.length;
    }
  },
  methods: {
    generateOutput() {
      this.output = `El total de listado es: ${this.totalList}`;
    }
  }
};
</script>

<style type="text/css">
body {
  text-align: center;
}

#contenedor {
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dashed gray;
}

#contenedor .bloque1 {
  width: 100px;
  margin-top: 70px;
  background-color: red;
  color: #f5f5dc;
  float: left;
  margin-right: 5px;
}

#contenedor .bloque2 {
  width: 100px;
  background-color: yellow;
  color: black;
  font-weight: bold;
  float: left;
  margin-right: 5px;
}

.clear {
  clear: both;
}

.bloque1, .bloque2 {
  background-color: red;
  color: #f5f5dc;
  padding: 10px;
  margin-top: 10px;
}

.bloque2 {
  background-color: yellow;
  color: black;
  font-weight: bold;
}

#contenedor .bloque1 p {
  font-style: italic;
}

p {
  padding: 10px;
}

.gray-bg {
  background-color: #e6e6e6;
}

.hidden {
  display: none;
}

.btn {
  background-color: blue;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  display: inline-block;
}

.output {
  margin-top: 10px;
  font-weight: bold;
}
</style>

