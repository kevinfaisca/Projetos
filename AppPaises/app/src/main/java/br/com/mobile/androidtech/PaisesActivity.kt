package br.com.mobile.androidtech
import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.widget.SearchView
import kotlinx.android.synthetic.main.activity_tela_inicial.*
import kotlinx.android.synthetic.main.toolbar.*
import androidx.recyclerview.widget.DefaultItemAnimator
import androidx.recyclerview.widget.LinearLayoutManager
import com.squareup.picasso.Picasso
import kotlinx.android.synthetic.main.activity_adicionar.*
import kotlinx.android.synthetic.main.activity_paises.*
import kotlinx.android.synthetic.main.menu_lateral_cabecalho.*

class PaisesActivity: DebugActivity() {
    private val context: Context get() = this
    var pais: Pais? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_paises)

        pais = intent.getSerializableExtra("pais") as Pais
        setSupportActionBar(toolbar)
        supportActionBar?.title = "${pais!!.nome}"
        supportActionBar?.setDisplayHomeAsUpEnabled(true)


      // nomePais.text =  pais?.nome
      //  Picasso.with(this).load(pais?.bandeira).fit().into(imagempais, object: com.squareup.picasso.Callback{
       //         override fun onSuccess() {}
       //         override fun onError() { }
       //     })

    }


    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_paises, menu)
        (menu?.findItem(R.id.action_buscarpaises)?.actionView as SearchView).setOnQueryTextListener(
            object : SearchView.OnQueryTextListener {
                override fun onQueryTextChange(newText: String): Boolean {
                    return false
                }

                override fun onQueryTextSubmit(query: String): Boolean {
                    return false
                }
            })
        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        val id = item?.itemId
        if  (id == R.id.action_buscarpaises) {
            Toast.makeText(context, "Botão de buscar", Toast.LENGTH_LONG).show()

        }
        else if (id == android.R.id.home) {
            finish()
        }
        return super.onOptionsItemSelected(item)
    }
}
