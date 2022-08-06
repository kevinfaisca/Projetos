package br.com.mobile.androidtech

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_adicionar.*
import kotlinx.android.synthetic.main.toolbar.*

class AdicionarActivity : DebugActivity() {
    private val context: Context get() = this
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_adicionar)
        setTitle("Novo Pais")

        salvarPais.setOnClickListener {
            val pais = Pais()
            pais.nome = nomePais.text.toString()
            pais.capital = capitalPais.text.toString()
            pais.bandeira = bandeiraPais.text.toString()
            pais.continente = continentePais.text.toString()
            //pais.populacao = populacaoPais.text.toString()
            //pais.latitude = latitudePais.text.toString()
            //pais.longitude = LongitudePais.text.toString()
        }
        setSupportActionBar(toolbar)
        supportActionBar?.title = "Adicionar países"
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_add, menu)
        return super.onCreateOptionsMenu(menu)
    }
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        val id = item?.itemId
        if (id == android.R.id.home) {
            finish()
        }
        return super.onOptionsItemSelected(item)
    }
}
